const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

promiseGet(wrongUrl)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
