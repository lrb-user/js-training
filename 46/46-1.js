function* genDecFunc() {
  yield 1;
}

const getExpFunc = function* () {
  yield 1;
};

const obj = {
  *genObjMethod() {
    yield 1;
  },
};

class MyClass {
  *genClsMethod() {
    yield 1;
  }
}
