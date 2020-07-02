import { foo } from './foo'
console.log(foo());
// 定义提升
// export function bar(){
//   console.log('bar def');
//   return 'bar'
// }
export let bar = 'bar'