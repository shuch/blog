import count from './count';

console.log('es-moudle', count);

setTimeout(() => {
  console.log('es-module after', count);
}, 2000);
