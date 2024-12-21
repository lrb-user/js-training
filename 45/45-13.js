const rejected = new Promise((_, reject) =>
  reject(new Error("error occureed"))
);
