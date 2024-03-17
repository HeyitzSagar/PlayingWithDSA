
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


