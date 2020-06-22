const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const html = fs.readFileSync('./index.html');
  res.end(html);
}).listen(3000);

http.createServer((req, res) => {
  const html = fs.readFileSync('./index2.html');
  res.end(html);
}).listen(3001);