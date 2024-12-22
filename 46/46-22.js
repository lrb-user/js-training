const fetch = require("noed-fetch");

const foo = async () => {
  try {
    const wrongUrl = "https://wronf.url";

    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

foo();
