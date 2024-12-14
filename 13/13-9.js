var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();

//결과는 1,1, 나오는데 var x 는 전역변수로 선언되었고, foo 함수 내에서는 x = 10인데 왜 10이 아니고 1인지 모르겠음
