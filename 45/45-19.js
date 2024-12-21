const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

promiseGet(wrongUrl).then(
  (res) => console.log(res),
  (err) => console.error(err)
);
