var http = require('http');

http.createServer(function(req, res) {
  res.end('FOOBAR');
}).listen(3000);
