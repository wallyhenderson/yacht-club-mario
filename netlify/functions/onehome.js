exports.handler = async function(event) {
  const id = event.queryStringParameters && event.queryStringParameters.id;
  if (!id || !/^\d+$/.test(id)) {
    return { statusCode: 400, body: 'Invalid property id' };
  }
  const token = process.env.ONEHOME_TOKEN;
  const searchId = '51da3393-51f2-3b18-b803-430fc4fe8f3c';
  if (!token) {
    return { statusCode: 500, body: 'ONEHOME_TOKEN is not configured' };
  }
  const target = `https://portal.onehome.com/en-US/property/aotf~${id}~SEFMIAMI?token=${encodeURIComponent(token)}&searchId=${encodeURIComponent(searchId)}`;
  return {
    statusCode: 302,
    headers: { Location: target, 'Cache-Control': 'no-store' },
    body: ''
  };
};
