//  Call, Bind and Apply

// var obj = {name : "Piyush"};

// function sayHello(age) 
// {
//     return "Hello" + this.name + "is" + age;
// }

// console.log(sayHello.call(obj, 24));



// var obj = {name : "Piyush"};

// function sayHello(age) 
// {
//     return "Hello" + this.name + "is" + age;
// }

// console.log(sayHello.call(obj, 22))
// const value = sayHello.apply(obj, [22]);
// console.log(value);
// const value2 = sayHello.bind(obj, 22);
// console.log(value2());


// const age = 10;

// var person = {
//     name : 'Piyush',
//     age : 20,
//     getAge: function () {
//         return this.age;
//     },
// }; 

// var person2 = {age: 24};
// console.log(person.getAge.call(person2));

