const dns = require('dns');

dns.resolve('github.com', (err, address) => {
  if (err) {
    console.log(err);
  }

  console.log('adress', address);
})