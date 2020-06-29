// import count from './count';
import { a } from './esm-export';

// console.log('es-moudle', count);
console.log('es-moudle', a);

setTimeout(() => {
  console.log('es-module after', a);
}, 2000);
