// this keyword 

// console.log(this);
// this.a = 5;

// function name() {
//     console.log(this.a);
// }
// name();

// let user = {
//     name : "Sagar",
//     age : 24,
//     getDetails()
//     {
//         console.log(this.name);
//     },
// };

// user.getDetails();

// let user1 = {
//     name : "Sagar",
//     age : 24,
//     childObj: {
//         newName: "Roadside Coder",
//         getDetails()
//         {
//             console.log(this.newName, "and" , this.name);
//         }
//     }
    
// };
// user1.childObj.getDetails();


// let user2 = {
//     name: 'Sagar',
//     age: 25,
//     getDetails: () => {
//         console.log(this.name);
//     }
// }
// user2.getDetails();

// const user = {
//     firstName: "Sagar",
//     getName()
//     {
//         const firstName = "Sumit";
//         return this.firstName;
//     },
// };

// console.log(user.getName());  // Sagar 


// function makeUser() {
//     return{
//         name :'Sagar',
//         ref(){
//             return this
//         },
//     }
// }

// let user = makeUser();
// console.log(user.ref().name);


// const user = {
//     name : 'Piyush Agrawal',
//     logMessage()
//     {
//         console.log(this.name);
//     },
// };

// setTimeout(
//     function () {
//         user.logMessage();
//     }, 1000);

const user = {
    name : "Sagar Gupta",
    greet() {
        return `Hello, ${this.name}`;
    },
    farewell: () => {
        return `GoodBye, ${this.name}`;
    }
}

// console.log(user.greet());
// console.log(user.farewell());

// Create an Object calculator

let calculator = {
    read()
    {
        this.a = +prompt("a =", 0);
        this.b = +prompt("b =", 0);
    },
    sum()
    {
        return this.a + this.b;
    },
    mul()
    {
        return this.a * this.b
    },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());



var length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    methood(fn){
        fn();
    },
};
object.methood(callback);

