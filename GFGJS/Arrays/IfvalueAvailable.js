//  check whether the given value is available or not

// this is a naive approach using linear search...

function checkavailableValue(arr, el) {
  //  loop through each array and will find if arr[i] == el return true else not
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == el) {
      return `element ${el} is present at ${i}`;
    }
    return `Nahi hai bhai ismein`;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let el = 19;
// console.log(checkavailableValue(arr, el))

//  the second most best approach is binary search

//  simply i have a array i have to find the given element is preset or not
//  please notice that binary search works only on the sorted array

function ElementIsAvailable(arr, el) {
  let low = 0;
  let high = arr.length + 1;

  while (low <= high) {
    const mid = Math.ceil((low + high) / 2);
    const midvalue = arr[mid];
    if (midvalue == el) {
      return `element ${el} is found at ${mid + 1}`;
    } else if (el > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return `element not found`;
}

console.log(ElementIsAvailable(arr, el));




//  using the filter method to check whether the given element is present
// inside the array

function checkavailable(arr, el)
{
    let ans = arr.filter((item) => item == el)
    if (ans.length) {
        return `${el} is present inside the array`;
    }
    else
        return `${el} is not present inside the array`;
}
console.log(checkavailable(arr, el))