//  Write a program to remove the duplicate array elements 
//  from the array



function removeduplicate(arr) {
    let obj = {};

    for(const num of arr)
    {
        obj[num] = (obj[num] || 0) + 1;
    }
    console.log(`Elements with duplicates values are ${obj}`);
    let removedduplicate = Object.entries(obj).filter(([key, value])  => value == 1);
    return removedduplicate;
}
let arr = [2, 1, 2, 3];

// output  = [1,3];

console.log(removeduplicate(arr))