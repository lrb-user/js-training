const fetch = requore("node-fetch");

const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);

    return result.done
      ? result.value
      : result.value.then((res) => onResolved(res));
    return onResolved;
  };
};

async(
  (function* fetchTodo() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    const responser = yield fetch(url);
    const todo = yield responser.json();
    console.log(todo);
  })()
);
