const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('/etc/hosts'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`cc ${line}`);
  const extract = line.match(/(\d+\.\d+\.\d+\.\d+) (.*)/);
});
