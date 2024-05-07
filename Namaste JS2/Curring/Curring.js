// what is currying and what is its practical use of currying ?

//  simple method
// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(5, 2, 10));

//  lets supposse there is a functions having hundered of parameter

function add(a, b, c) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(add(2)(3)); // this particular functions does not executes \
// until it gets all the three arguments


// diving deep to practical usage of the currying in the real world

function sendAutoEmail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending email to ${to} with ${subject} and ${body}`)
        }
    }
}

// sendAutoEmail("sagargupta.gola@gmail.com")("Regarding a Job application")("Hello sagar");


//  lets take a weired case in which there is n num of arguments how will you do that sum (yes its a mixture of recursion and currying )


// Define a function add that takes any number of arguments
function add(...args) {
    // Define a helper function to perform currying
    function curriedAdd(...nextArgs) {
        // Concatenate the current and next arguments
        const combinedArgs = [...args, ...nextArgs];

        // If no arguments are provided, return the accumulated sum
        if (nextArgs.length === 0) {
            // Calculate the sum of all arguments using a loop
            let sum = 0;
            for (const arg of combinedArgs) {
                sum += arg;
            }
            return sum;
        } else {
            // Return a curried function with the accumulated arguments
            return add(...combinedArgs);
        }
    }

    // Return the curried function
    return curriedAdd;
}

// Usage
const sum = add(1)(2)(3)(4)(); // Returns 10
console.log(sum); // Output: 10




//  still to figure out that why we actually need currying when we can do
// or solve it using general functions 

//  curriying is like a little knowledge with composition 



//  what is composition ?

