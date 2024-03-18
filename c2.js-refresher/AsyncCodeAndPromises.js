const fetchData = (order) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Request ${order} is done!`);
    }, 1000);
  });

  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");

  fetchData(1)
    .then((text) => {
      console.log(text);
      return fetchData(2);
    })
    .then((text) => {
      console.log(text);
    });
}, 1000);
