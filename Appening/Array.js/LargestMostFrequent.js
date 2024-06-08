let array = [1, 1, 66, 66, 7, 8, 9, 9, 9, 22, 4];

// output : largest most frequent : 9

function largestMostFrequent(array) {
  let obj = {};
  let maxFrequency = 0;
  let largestKey = -Infinity;
  for (const num of array) {
    obj[num] = (obj[num] || 0) + 1;
    
  }

  for (const [key, value] of Object.entries(obj)) {
    const numKey = Number(key);
    if (
      value > maxFrequency ||
      (value === maxFrequency && numKey > largestKey)
    ) {
      maxFrequency = value;
      largestKey = numKey;
    }
  }

  return largestKey;
}

console.log(largestMostFrequent(array));
