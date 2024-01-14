let array1 = [10, 20, 40, 50, 60];
let array2 = [30, 40, 70, 90, 11, 33];

function mergearray(array1, array2) {
    let mergedarray = array1.concat(array2);
    let uniqueElement = new Set([...mergedarray]);
    return Array.from(uniqueElement);
}
console.log(mergearray(array1, array2))