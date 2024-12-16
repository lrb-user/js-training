// data type
// string, number, boolean, object, array, function, null, undefined

// 1. primitive - string, number, boolean, null, undefined, symbol, bigint
// 2. object - object({}), array([]), function, class, String, Number, Boolean

// 리터럴
let str = "soobin" + " " + "bak"; //
const num = 5 / 2;

const nanTest = "abcd" / 2;
const apple = String(10);
const nullish = undefined;

// falsy한 값
// - 0, '', false, null, undefined,

// truthy한 값
// - 0이 아닌 모든 숫자

const myAge = "asdfasdfasdfas";
if (myAge) {
  console.log("not baby");
} else {
  console.log("baby");
}

const arr = [1, 2, 3];
arr.push(4);

function myName() {}

console.log(myName());
console.log(Number.isNaN(nanTest));

const student = {
  name: "soobin",
  age: 20,
};

const student2 = student;

const student3 = { ...student };
const student4 = JSON.parse(JSON.stringify(student));

const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
arr2[0] = 20;
const arr3 = [...arr1];
// 깊은 복사 얕은복사
student2.name = "libin";

console.log("student", student);
