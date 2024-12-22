function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = genFunc();

console.log(generator.next());

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
