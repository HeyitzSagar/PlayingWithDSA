// finding the kth smallest array using js

let array = [10, 3, 44, 55, 1, 24, 56, 33, 67, 332];
let k = 2;

function findKthsmallest(array, k) {
    if (k <=0 || k>array.length) {
     return "Invalid k value";   
    }
    const sortedArray = array.sort((a, b) => a-b);
    let element  = sortedArray[k-1];
    return element;
}

console.log(findKthsmallest(array, k));
