const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};

const json = JSON.stringify(obj);
console.log(typeof json, json);

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
