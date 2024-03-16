//  find all the pairs of elements who sum
// equals to target

let array = [20, 2, 4, 18, 34, 55, 64, 9, 13];

let target = 22;

function Twosum(array, target) {
  let pair = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        pair.push(array[i], array[j]);
      }
    }
  }
  return pair;
}

console.log(Twosum(array, target));
