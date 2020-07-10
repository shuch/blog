const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
  console.log('request', req.url);

  fs.readFile('./big.file', (err, data) => {
    if (err) return;
    res.end(data);
  });
}).listen(3001);