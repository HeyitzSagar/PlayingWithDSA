// let a = "5";
// let b = +a;

// console.log(typeof b);

//  random two sum problem

let array = [10, 20, 30, 40, 50];
let target = 90;

function Twosum(array, target) {
  let len = array.length;
  let pair = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pair.push(array[i], array[j]);
      }
    }
  }
  return pair;
}


console.log(Twosum(array, target));
