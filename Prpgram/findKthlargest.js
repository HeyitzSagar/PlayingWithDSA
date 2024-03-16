//  find the kth largest element in the array

let array = [10, 3, 44, 55, 3, 24, 56, 33, 67, 332];
let k = 2;
function findKthlargest(array, k) {
    if (k <=0 || k>array.length) {
     return "Invalid k value";   
    }
    const sortedArray = array.sort((a, b) => b-a);
    let element  = sortedArray[k-1];
    return element;
}

console.log(findKthlargest(array, k));
