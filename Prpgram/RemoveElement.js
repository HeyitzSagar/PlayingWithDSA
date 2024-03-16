// LeetCode #27 - Remove Element

// Given an array nums and a value val,
// remove all instances of that value in-place
// and return the new length. Do not allocate extra
// space for another array, you must do this by
// modifying the input array in-place with O(1)
// extra memory

let array = [3,2,2,3];
let valuetoremove = 3;

//  creating a function that takes the array and target to be removed

function removedarray(array, target) {
    let removedarray = array.filter((item) => item != target);
    return removedarray;
}

console.log(removedarray(array, valuetoremove));  
