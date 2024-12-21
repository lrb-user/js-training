const rejectedPromise = Promise.reject(new Error("Error!"));
rejectedPromise.catch(console.log);
