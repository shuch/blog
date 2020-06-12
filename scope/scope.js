var value=1
function foo() {
 console.log(value);
}
function bar() {
 var value = 2;
 foo();
}
foo()
