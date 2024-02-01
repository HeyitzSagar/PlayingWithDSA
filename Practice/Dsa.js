// implement the binary search

let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 10;
//  find the index of the target in the array using binary search

function binarySearch(array1, target) {
  let low = 0;
  let high = array1.length + 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midvalue = array1[mid];
    if (midvalue == target) {
      return mid + 1;
    } else if (target > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
function binarySearch2(array1, target) {
  let low = 0;
  let high = array1.length + 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midvalue = array1[mid];

    if (midvalue == target) {
      return mid + 1;
    } else if (target > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
let array2 = [2, 6, 7, 8, 88, 99, 12];
function linearSearch(array2, target) {
  let length = array2.length;
  for (let i = 0; i < array2.length; i++) {
    if (target == array2[i]) {
      return i + 1;
    }
  }
  return "invalid element";
}
// console.log(linearSearch(array2, 99));
//  count the frequency of the each element of the array

let array3 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 1, 2, 2, 3, 4, 5];
function countfrequency(array3) {
  let freq = {};
  for (let i = 0; i < array3.length; i++) {
    const element = array3[i];
    if (freq[element]) {
      freq[element] += 1;
    } else {
      freq[element] = 1;
    }
  }
  return freq;
}
// console.log(countfrequency(array3));
//  write a function to check whether an given string anagram or not 

function checkAnagram(str1, str2) {
    const formatstr1 = str1.replace(/\s/g, '').toLowerCase();
    const formatstr2 = str2.replace(/\s/g, '').toLowerCase();

    if (formatstr1.length !== formatstr2.length) {
        return false;
    }

    // sort the characters in both strings and compare
    const sortedstr1 = formatstr1.split('').sort().join('');
    const sortedstr2 = formatstr2.split('').sort().join('');

    if (sortedstr1 === sortedstr2) {
        return 'Anagram';
    }
    else
    return 'Not Anagram';
}
console.log(checkAnagram("Sagar", "Sumit"));