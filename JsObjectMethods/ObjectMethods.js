//  Object Keys 


const obj = { a : 1, b: 2, c: 3};

const keys = Object.keys(obj);
// console.log(keys);

const values = Object.values(obj);
// console.log(values);

//  object.entries   This method returns an array of a given object's
//  own enumerable property [key, value] pairs.

// const enteries = Object.entries(obj);
// console.log(enteries);  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Object.assign():
// This method is used to copy the values of all enumerable
//  own properties from one or more source objects to a target object.

// const obj1 = { a: 1, b:2 };
// const obj2 = { b: 3, c : 4};

// const mergedObj = Object.assign({}, obj1, obj2, obj);

// console.log(mergedObj);
