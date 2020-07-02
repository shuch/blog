var a = [];

for (var i = 0; i < 10; i++) {
  // 只有定义没有调用
  // 每个函数都是console.log(i);
  // i 为全局作用域
  a[i] = function() {
    console.log(i);
  }
}

console.log(a[6]);