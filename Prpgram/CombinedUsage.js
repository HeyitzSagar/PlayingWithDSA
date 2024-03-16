// practicing some questions based on the combined 
//  uses of the map, reduce and filter


// Sum of Squares of Positive Numbers:
// Given an array of numbers, 
// find the sum of the squares of all positive numbers.

// let array = [1, 2, 4, 5, 6, 7, 8, 9, 11];

// let sumofSquare = array.filter((item) => item % 2 !== 0)
// let squares = sumofSquare.map((item) => item * item);
// let sum = squares.reduce((acc, curr) => acc = acc + curr)
// console.log(sum);

// Filter and Double Even Numbers:

// let arr = [10, 20, 40, 7, 9, 15, 19];

// let filteredEven = arr.filter((item) => item % 2 == 0);
// let double = filteredEven.map((item) => item * item);
// console.log(double);

// Calculate Average Age:Given an array of objects 
// representing people with 
// their ages, calculate and return the average age.

const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
  ];

  let average = people.reduce((acc, people) => acc + people.age, 0);
  const averageage = average/people.length;

  console.log(averageage);
  