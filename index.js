module.exports = (req, res) => {
  const options = {
    path: require('url').parse(req.url, true).path,
    method: req.method,
    hostname: 'api.telegram.org',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const apiRequest = require('https').request(options, apiResponse => {
    let data = '';
    apiResponse.on('data', (chunk) => {
      data += chunk.toString();
    });
    apiResponse.on('end', () => {
      res.write(data);
      res.end();
    });
  });
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      apiRequest.write(body);
      apiRequest.end();
    });
  } else {
    apiRequest.end();
  }
}
