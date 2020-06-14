process.env.UV_THREADPOOL_SIZE = 64;

const fs = require('fs');

// default 7 thread
setInterval(() => {
  console.log(Date.now());
}, 2000);

// io 启用线程池，默认4个线程
// fs.readFile('/etc/hosts', (err, data) => {
//   console.log('data', data);
// });

// change default thread to 64