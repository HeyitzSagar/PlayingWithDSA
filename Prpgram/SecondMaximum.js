// finding the second maximum element inside the array

function secondMaximum(array) {
  if (array.length < 2) {
    return "Length is less than 2";
  }
  let firstMax = array[0];
  let secondMax = array[1];

  for (let i = 2; i < array.length; i++) {
    if (array[i] > firstMax) {
      secondMax = firstMax;
      firstMax = array[i];
    } else if (array[i] > secondMax && array[i] !== firstMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
}

let array = [10, 30, 55, 22, 42, 45, 22]
console.log(secondMaximum(array));