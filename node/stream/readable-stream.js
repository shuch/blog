const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req, res) => {
  // gzip
  res.writeHead(200, {
    'content-encoding': 'gzip',
    'content-type': 'text/html; charset=utf-8',
  });

  // pipe receive one stream input as other stream output
  fs.createReadStream('./big.file')
    .pipe(zlib.createGzip())
    .pipe(res);
}).listen(3000);
