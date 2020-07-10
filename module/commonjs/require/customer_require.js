var fs = require('fs');
var path = require('path');


const cache = {};

function req(mod) {
  // console.log('cache', cache);
  // if (cache[mod]) {
  //   return cache.mod;
  // }
  // 1. resolve path
  const filename = path.join(__dirname, mod);
  // 2. read file content
  const content = fs.readFileSync(filename, 'utf8');
  // console.log('content', content);
  // 3. module wrapper
  // function fn(exports, require, module, filename, dirname) {
  //   module.exports = content;
  //   return module.exports;
  // }
  const fn = new Function('exports', 'require', 'module', '__filename', '__dirname', content);

  const module = {
    exports: {},
  };
  // 执行文件内容
  fn(module.exports, req, module, __filename, __dirname);
  // 或者
  // eval();
  
  // 5. return module
  // cache.mod = module.exports;
  return module.exports;
}

// exports 不能被赋值，否则失去对module.exports 引用
// good
// module.exports = {
//   req,
// };
// bad
// exports = {
//   req,
// };
exports.req = req;


