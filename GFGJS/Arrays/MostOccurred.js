function mostoccurred(arr) {
  let obj = {};
  let max = 0;
  let el = 0;
  for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
//   console.log(obj);
  for (const i in obj) {
    if (max < obj[i]) {
      max = obj[i];
      el = i;
    }
  }
  return el;
}

let arr = [1,2,3, 4, 5, 7, 8, 9, 0, 1];

console.log(mostoccurred(arr))

