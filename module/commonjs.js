
const { count } = require('./count');
// const a = require('./esm-export');

console.log('cjs', count);
setTimeout(() => {
  console.log('cjs after', count);
  
}, 2000);

// const {count} = require('./count')
// setTimeout(function () {
//   console.log('read count after 1000ms in commonjs is', count)
// }, 1000)