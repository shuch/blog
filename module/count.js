exports.count = 1;

setTimeout(() => {
  console.log('incre count', ++exports.count);
}, 1000);
