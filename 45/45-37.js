Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) =>
    setTimeout(() => resolve(new Error("Error")), 1000)
  ),
]).then(console.log);
