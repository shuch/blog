process.on('message', (message) => {
  console.log('child got message', message);
});

process.send({ hello: 'I am child' });