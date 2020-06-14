const childProcess = require('child_process');

const netConnect = childProcess.fork('./child.js');
netConnect.send({ hello: 'I am parent'});

netConnect.on('message', (message) => {
  console.log('parent got message', message);
})