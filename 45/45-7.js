const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = "https://jsonplaceholder.typicode.com";

get(`${url}/posts/1`, ({ userId }) => {
  console.log(userId);
  get(`${url}/users/${userId}`, (userInfo) => {
    console.log(userInfo);
  });
});
