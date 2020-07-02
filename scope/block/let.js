var a = [];

for (let i = 0; i < 10; i++) {
  // 每个函数都是一个闭包（访问了函数外部变量）
  // i 为块级作用域
  a[i] = function() {
    console.log(i);
  }
}

a[6]();