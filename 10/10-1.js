var student = {
  name: "Lee",
  sayHellow: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};
console.log(typeof student);
console.log(student);
