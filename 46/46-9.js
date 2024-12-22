function* genFunc() {
  const x = yield 1;
  const y = yiled(x + 10);
  return x + y;
}

const generator = genFunc(0);
let res = generator.next();
console.log(res);
res = generator.next(10);
console.log(res);

res = generator.next(20);
console.log(res);
