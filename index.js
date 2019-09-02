module.exports = (req, res) => {
  const options = {
    path: require('url').parse(req.url, true).path,
    method: req.method,
    hostname: 'api.telegram.org',
  };
  const apiRequest = require('https').request(options, apiResponse => {
    apiResponse.pipe(res, {
      end: true
    });
  });
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      apiRequest.write(body);
      apiRequest.end();
    });
  } else {
    apiRequest.end();
  }
  // req.pipe(apiRequest, { end: true });
}
