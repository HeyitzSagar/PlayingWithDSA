// Remove Duplicate Elements from JavaScript Array


let array = [1,2,2,2,3,5,6,6,7];
// let arraywithoutduplicates = [1,3,5,7];

function removedduplicateElement(array) {
    let obj = {};
    for(const num of array)
    {
        obj[num] = (obj[num] || 0) + 1;
    }
    let uniqueElements = Object.keys(obj).filter(key => obj[key] === 1).map(Number);
    return uniqueElements;
}
console.log(removedduplicateElement(array));  // [ 1, 3, 5, 7 ]