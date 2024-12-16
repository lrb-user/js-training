// 데이터 타입
// 1. 워시타입(number, string, boolean, null, undefined, symbol, BigInt)
// 2. 객체타입(object, function, array, class, Number, String, Boolean, Function, 원시타입을 제외한 나머지)

// 객체 ??? property
const obj = {
  name: "abc",
  age: 20,
};

// 함수 정의 방식
// 1. 선언문
function add(x, y) {
  return x + y;
}

// 2. 표현식
var add = function add2(x, y) {
  return x + y;
};

// 3. Function 생성자 함수
// - 생성자로 만든 객체 = 인스턴스
var add = new Function("x", "y", "return x + y");

function Student(firstName, lastName, age) {
  음;
  console.log(arguments);
  this.name = firstName + " " + lastName;
  this.age = age;
}

Student(); // return undefined;
new Student(); // return this (=== {name: 'soobin', age: 20})

// 4. 화살표함수
// 일반함수와의 차이점 (22. this binding, 19. prototype이 없음, arguments 객체가 없다)
var add = (x, y) => {
  var happy = 24;
  console.log(happy);
  return x + y;
};

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function 메아리(count) {
  if (count === 10) return;
  console.log("메아리");
  메아리(count + 1);
}

window.addEventListener("click", function () {});

var count = 0;
function increase() {
  // count = count + 1;
  // return count;

  return ++count;
}
