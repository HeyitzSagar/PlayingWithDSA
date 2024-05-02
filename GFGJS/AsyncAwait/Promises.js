//  here i am creating a function which returns
// promises based on the params


// function returnPromises(p)
// {
//     const Promi = new Promise((resolve, reject) => {
//         if ( p > 10) {
//             resolve(`Promise resolved`);
//         }
//         else{
//             reject(`Promise Rejected`);
//         }
//     })
//     return Promi;
// };

// async function handlePromise(p) {
//     try {
//         const result = await returnPromises(p);
//         console.log(result); // Output the resolved value
//     } catch (error) {
//         console.log(error); // Output the rejection reason
//     }
// }

// handlePromise(1); // Call the async function


//  these above functions which is returning a promise is handled by .then and catch

// returnPromises(1).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err);
// });



// now i am going to handle the promise using async await;




