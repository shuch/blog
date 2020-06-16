const net = require('net');
const util = require('util');
// process.env.UV_THREADPOOL_SIZE = 64;

const server = net.createServer((socket) => {
  console.log('client connected');
  // 查看tcp连接
  server.getConnections((err, count) => {
    console.log('当前链接数量%d', count);
    
  });

  // 客户端数据
  let address = socket.address();
  console.log('客户端地址 %s', util.inspect(address));
  // 读取数据
  socket.on('data', (data) => {
    console.log('本地收到的内容', data);
    console.log('累计字节数', socket.bytesRead);
    
  });
  // 关闭连接
  socket.on('end', () => {
    console.log('客户端关闭连接');
  })
});

server.listen(3000, 'localhost', () => {
  console.log('server listening');
});
