import jsforce from 'jsforce';

// eslint-disable-next-line import/prefer-default-export
export async function fetchMyFeed(tokens) {
  const conn = new jsforce.Connection({
    instanceUrl: tokens.instance_url,
    accessToken: tokens.access_token,
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
  });

  return new Promise((resolve, reject) => {
    conn.chatter.resource('/feeds/news/me/feed-elements').retrieve((err, res) => {
      if (err) {
        console.log('Failed to fetch', err);
        reject(err);
      } else {
        resolve(res.elements);
      }
    });
  });
}
