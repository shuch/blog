const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

console.log('cluster', cluster.isMaster);
console.log('cups', require('os').cpus());
// console.log('cpu 核数：', numCPUs);


if (cluster.isMaster) {
  process.title = 'node 主进程';
  console.log(`主进程 ${process.pid} 正在运行`);
  for (let i = 0; i < 1; i++) {
    // 复制 worker 进程
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是 HTTP 服务器。
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World');
  }).listen(8000);
  process.title = 'node 工作进程'
  console.log(`工作进程 ${process.pid} 已启动，父进程：${process.ppid}`);
}

process.on('exit', () => {
  console.log('主进程退出');
})
