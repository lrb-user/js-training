async function foo(n) {
  return n;
}

console(1).then((v) => console.log(v));

const bar = async function (n) {
  return n;
};
bar(2).then((v) => console.log(v));

const baz = async (n) => n;
baz(3).then((v) => console.log(v));

const obj = {
  async foo(n) {
    return n;
  },
};

obj.foo(4).then((v) => console.log(v));

class MyClass {
  async bar(n) {
    return n;
  }
}

const MyClass = new MyClass();
MyClass.bar(5).then((v) => console.log(v));
