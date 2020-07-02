// will change
// const count = require('./count');
const { count } = require('./count');

console.log('cjs', count);
setTimeout(() => {
  console.log('cjs after', count);
}, 2000);