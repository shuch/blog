var req = require('./customer_require');
console.log('req', req.req.toString());

var a = req.req('./a.js');
console.log('a', a.name);