//  count the frequency of a given element
//  inside the array

function countfrequency(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (element == array[i]) {
             count = count + 1;
        }
        
    }
    return count;
}
let array = [10, 2, 4, 5, 6, 6, 77, 4, 4];
let element = 4;
console.log(countfrequency(array, element))