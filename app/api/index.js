// @flow
import jsforce from 'jsforce';
import { refreshToken } from '../utils/auth';
import type { Tokens } from '../types';

// eslint-disable-next-line import/prefer-default-export
export async function fetchMyFeed(tokens: Tokens) {
  const conn = new jsforce.Connection({
    instanceUrl: tokens.instanceUrl,
    accessToken: tokens.accessToken,
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
  });
  try {
    const result = await conn.request({
      url: '/chatter/feeds/news/me/feed-elements',
      headers: { 'X-Connect-Theme': 'Salesforce1' },
    });
    return result.elements;
  } catch (err) {
    if (err.errorCode === 'INVALID_SESSION_ID') {
      const newTokens = await refreshToken(tokens.refreshToken);
      conn.accessToken = newTokens.access_token;
      console.log('New access token', newTokens);
      const result = await conn.request({
        url: '/chatter/feeds/news/me/feed-elements',
        headers: { 'X-Connect-Theme': 'Salesforce1' },
      });
      return result.elements;
    }
    console.log('Failed to fetch my feed', err.errorCode, err);
    return [];
  }
}
