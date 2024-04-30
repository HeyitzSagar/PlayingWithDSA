//  given an array, find the largetmost frequent element inside the array
// output will be ["7" : 2]  or it can be 7

// let array = [1, 10, 2, 1, 1, 7, 3, 7, 4, 5, 4, 4];


function greatestMostFrequentElement(array) {
    let obj = {};
    let maxFrequency = 0;
    let mostFrequentElement;
    // Count frequencies of each element in the array
    for (const num of array) {
        obj[num] = (obj[num] || 0) + 1;
        if (obj[num] > maxFrequency || (obj[num] === maxFrequency && num > mostFrequentElement)) {
            maxFrequency = obj[num];
            mostFrequentElement = num;
        }
    }
    return mostFrequentElement;
}

let array = [ 10, 2, 1, 1, 7, 3, 7, 4, 5,  4];
console.log(greatestMostFrequentElement(array));
