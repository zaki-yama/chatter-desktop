import jsforce, { Connection } from 'jsforce';
import { fetchNewAccessToken } from '../utils/auth';
// import type { Tokens } from '../types';

type FetchFeedElementsResult = {
  elements: object[];
};

async function request(conn: Connection): Promise<object[]> {
  const result = (await conn.request({
    method: 'GET',
    url: '/chatter/feeds/news/me/feed-elements',
    headers: { 'X-Connect-Theme': 'Salesforce1' }
  })) as FetchFeedElementsResult;
  return result.elements;
}

export async function fetchMyFeed(tokens: any) {
  const conn = new jsforce.Connection({
    instanceUrl: tokens.instanceUrl,
    accessToken: tokens.accessToken,
    version: '48.0'
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
  });
  try {
    return request(conn);
  } catch (err) {
    if (err.errorCode === 'INVALID_SESSION_ID') {
      const newTokens = await fetchNewAccessToken(tokens.refreshToken);
      conn.accessToken = newTokens.access_token;
      console.log('New access token', newTokens);
      return request(conn);
    }
    console.log('Failed to fetch my feed', err.errorCode, err);
    return [];
  }
}
