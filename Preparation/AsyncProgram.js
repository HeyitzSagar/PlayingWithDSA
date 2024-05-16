const { error } = require("console");

let arr = [1000, 2000, 3000, 4000];

for (let i = 0; i < arr.length; i++) {
    const Promises = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i);
        }, arr[i]);
    })

    Promises.then((res) => {
        console.log(res);
    }).catch((error) => console.log(error));
}
