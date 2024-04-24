function valuegreater(value) {
    const promise1 = new Promise((resolve, reject) => {
        if (value > 6) {
           setTimeout(() => {
            resolve("Promise resolved !!");
           }, 2000);
        } else {
            reject("Rejected");
        }
    })
    return promise1;
}

// valuegreater(7).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// async function HandlePromise(value) {
//     try {
//         const res = await valuegreater(value);
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// HandlePromise(9)



