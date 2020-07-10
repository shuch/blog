const fs = require('fs');

const bigfile = fs.createWriteStream('./big.file');

for (let i=0; i<=1e6; i++) {
  bigfile.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n');
}

bigfile.end();