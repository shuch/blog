const http  = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('req', req.url);
  if (req.url === '/') {
    const html = fs.readFileSync('./index.html');
    res.setHeader('Cache-Control', 'max-age=86400');
    res.end(html);
  }
  if (req.url === '/style.css') {
    const css = fs.readFileSync('./style.css');
    res.setHeader('Cache-Control', 'max-age=86400');
    res.end(css);
  }
  if (req.url === '/5.jpg') {
    const img = fs.readFileSync('./5.jpg');
    res.setHeader('Cache-Control', 'no-store');
    res.end(img);
  }
}).listen(1111);