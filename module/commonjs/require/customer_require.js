var fs = require('fs');
var path = require('path');


function req(mod) {
  // 1. resolve path
  const filename = path.join(__dirname, mod);
  // 2. read file content
  const content = fs.readFileSync(filename, 'utf8');
  console.log('content', content);
  // 3. module wrapper
  // function fn(exports, require, module, filename, dirname) {
  //   module.exports = content;
  //   return module.exports;
  // }
  let fn = new Function('exports', 'require', 'module', '__filename', '__dirname', content + '\n return module.exports;');

  // 4. return wrapper
  let module = {
    exports: {},
  };
  return fn(module.exports, req, module, __filename, __dirname);
}

exports.req = req;


