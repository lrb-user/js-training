var x = "global";

function foo() {
  console.log(x);
  var x = "local";
}

foo();
console.log(x);

// 왜 x가 undefinded이고, global인지 이해가 안감.
