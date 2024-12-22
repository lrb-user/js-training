function* genFunc() {
  yield1;
  yield2;
  yield3;
}

const generator = genFunc();

console.log(Symbol.iterator in generator);
console.log("next" in generator);
