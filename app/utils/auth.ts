import { remote, shell } from 'electron';
import crypto from 'crypto';
import querystring from 'querystring';
import base64url from 'base64-url';
import axios from 'axios';

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const { focusWin, waitCallback } = remote.require(`./main.${env}`);

/**
 * Salesforce OAuth2 endpoints
 */
const authzEndpointUrl =
  'https://login.salesforce.com/services/oauth2/authorize';
const tokenEndpointUrl = 'https://login.salesforce.com/services/oauth2/token';

// client id can be included in the app. it is NOT secret.
const clientId =
  '3MVG9I1kFE5Iul2BYKzI252s0YBhwFXki2TumX45xYKsTYAu4gz0679fqflPmwGN5YHsAdhH6frIt82CnxxLd';
// specify the same redirect URI in the connected app. The port number should be carefully chosen not to conflict to others
const redirectUri = 'http://localhost:33201/oauth2/callback';

/**
 * Execute OAuth2 Authz Code Flow and get tokens
 */
export default async function startAuth() {
  // code verifier value is generated randomly and base64url-encoded
  const verifier = base64url.encode(crypto.randomBytes(32));
  // code challenge value is sha256-hashed value of the verifier, base64url-encoded.
  const challenge = base64url.encode(
    crypto
      .createHash('sha256')
      .update(verifier)
      .digest()
  );
  // attach code challenge when requesting to authorization server
  const authzUrl =
    authzEndpointUrl +
    '?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      code_challenge: challenge
    });
  // open authorization url in OS standard browser
  shell.openExternal(authzUrl);
  // start temporary server in the redirect url. wait for callback from the authorization server
  const { code } = await waitCallback(redirectUri);
  // bring back the focus to this application as it opens OS browser
  focusWin();
  // add code verifier in token request.
  // client secret is not needed. All electron app should be public client.
  const ret = await axios({
    method: 'post',
    url: tokenEndpointUrl,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
      code_verifier: verifier
    })
  });
  return ret.data;
}

export async function fetchNewAccessToken(refreshToken) {
  const ret = await axios({
    method: 'post',
    url: tokenEndpointUrl,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId
    })
  });
  return ret.data;
}
