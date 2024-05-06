function CallbackCalls(cb1, cb2) {
  const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb1);
    }, 2000);
  });
  PromiseOne.then((res) => {
    console.log(res);
  }).catch((error) => {
    console.log(error);
  });
  for (let i = 0; i < 3; i++) {
    const PromiseTwo = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 6000);
    });
    PromiseTwo.then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
  }
}

CallbackCalls(1, 1);
