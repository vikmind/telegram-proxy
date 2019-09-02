const http = require('https');

module.exports = (res, req) => {
  const options = {
    ...req,
    hostname: 'api.telegram.org',
  };
  const apiRequest = http.request(options, apiResponse => {
    apiResponse.pipe(clientResponse, {
      end: true
    });
  });
}
