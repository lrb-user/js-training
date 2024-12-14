// result1 = 30
// abc = 20
// add = 정의문이 들어옴

console.log(result1); // undefined
// console.log(abc); // error
var result1 = 10 + 20;
console.log(result1); // 30

let abc = 20;
console.log(abc); // 20
(function BlogPage() {
  console.log(result2);
  var result2 = 20;
})();

// var / let, const
// var 최소한 함수 스코프(유효범위)
// let 블록 스코프

// scope -> global scope > function scope > block scope
console.log("add", add([1, 2, 3]));
function add(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  if (sum > 20) {
    let result = "big";
    console.log(result);
  }

  return sum;
}

add(1, 2);
console.log(sum);
