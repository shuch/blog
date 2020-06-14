const net = require('net');

// process.env.UV_THREADPOOL_SIZE = 64;

const server = net.createServer((socket) => {
  console.log('client connected');
});

server.listen(3000, 'localhost', () => {
  console.log('server listening');
});
