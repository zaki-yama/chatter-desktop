import jsforce from 'jsforce';
import { refreshToken } from '../utils/auth';

// eslint-disable-next-line import/prefer-default-export
export async function fetchMyFeed(tokens) {
  const conn = new jsforce.Connection({
    instanceUrl: tokens.instanceUrl,
    accessToken: tokens.accessToken,
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
  });
  try {
    const result = await conn.chatter.resource('/feeds/news/me/feed-elements').promise();
    return result.elements;
  } catch (err) {
    if (err.errorCode === 'INVALID_SESSION_ID') {
      const newTokens = await refreshToken(tokens.refresh_token);
      conn.accessToken = newTokens.access_token;
      console.log('New access token', newTokens);
      const result = await conn.chatter.resource('/feeds/news/me/feed-elements').promise();
      return result.elements;
    }
    console.log('Failed to fetch my feed', err.errorCode, err);
    return [];
  }
}
