var person = {
  name: "Lee",
  sayHellow: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};
console.log(typeof person);
console.log(person);
