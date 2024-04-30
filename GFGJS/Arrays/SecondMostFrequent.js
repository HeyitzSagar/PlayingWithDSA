//  find the second most frequent element in the array

let array = [1, 2, 2, 4, 4, 5, 6, 7, 8, 9, 1, 1, 2];

// most frequent ----> 1;
// second most frequent ---> 2

function secondmostoccurred(array) {
    let obj = {};
    let firstMax = 1;
    let secondMax = 0;
    let el = 0;

    for(const num of array)
    {
        obj[num] = (obj[num] || 0) + 1;
    }
    console.log(obj);   // so here i count the occurrences of the each element present in the array

    for (const i in obj) {
        if (obj[i] > firstMax) {    // i am checking whether the values of obj > firstMax, if so secondmax = firstmax then firstmax = obj[i]
            secondMax = firstMax;
            firstMax = obj[i];
        } else if (obj[i] > secondMax && obj[i] < firstMax) {  // if not so i will again check obj[i] > secondMAx && obj[i] < firstmax 
            secondMax = obj[i];
            el = i;   // and now assigning the i to the el
        }
    }
    return el;
}

console.log(secondmostoccurred(array));