
// promise is nothing but an empty objects
// { data : orderdetails}


// fetch() is basically an api given by the browser to make external calls;

const fetchdata = async() => {
    const user = await fetch('https://github.com/HeyitzSagar');
    console.log(user);
};
fetchdata();
// console.log(fetchdata()

//  promise object is immutable

// promise object is a placeholder for a certain period of 
// time which gets fullfilled with data or response

// a promise is a container for the future value

// a promise is a object representing eventual completion
// or failure of an asynchronous operation.

//  promise chaining

 fetch().then().catch().then()

//  understanding promises.all

// let p1 = 1 sec
// let p2 = 2 sec
// let p3 = 3 sec
// Promise.all([p1, p2, p3]) will 
// take 3 sec then will give the result 


//  if one of the promises
//  get rejected then the final will be a failure
// output will be error
// if p2 gets error then it will throw it wont wait for p3

// Promise.allSettled([p1, p2, p3])   basically waits for all the api

//  promises.race([p1, p2, p3])  after 1s it will give value of p2, 


//  promise.any([p1, p2, p3]) // it will waits for the first resolved 
//  but if all of them fails then it will collect all the errors and gives the 
//  aggregate of all the errors




