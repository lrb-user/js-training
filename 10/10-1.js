var person2 = {
  name: "Lee",
  sayHellow: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};
console.log(typeof person2);
console.log(person2);
