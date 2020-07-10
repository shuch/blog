var req = require('./customer_require');
// console.log('req', req);

var a = req.req('./a.js');
console.log('b', a.name);
export.b = 'b';