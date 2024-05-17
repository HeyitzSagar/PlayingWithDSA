//  Array problems 
// const arr1 = [10, 5, 6, 99, 22];

function sortedarray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            
        }
        
    }
    return array;
}

// console.log(sortedarray(arr1));

//  find the occurrence of the each element in the array

// let array1 = [2, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 8];

function calculateoccurrence(array1) {
    let obj = {};
    for(const num of array1)
        {
            obj[num] = (obj[num] || 0) + 1;
        }
        return obj;
}
// console.log(calculateoccurrence(array1))

// let array1 = [2, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 8];

function nonrepeated(array1) {
    let obj = {};
    for(const num of array1)
        {
            obj[num] = (obj[num] || 0) + 1;
        }
        let nonrepeated = Object.entries(obj).filter(([key, value]) => value == 1);
        let keyvalue = nonrepeated.map((item) => item[0]);
        return keyvalue;
}
// console.log(nonrepeated(array1));

//  write a function to find second maximum in the array 

function secondmaximum(array)
{
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstMax) {
            secondMax = firstMax;
            firstMax = array[i];
        }
        else if(array[i] > secondMax && array[i] < firstMax)
            {
                secondMax = array[i];
            }
        
    }
    return secondMax;
}

// let array1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(secondmaximum(array1));

//  find the three largest from the array

function largestthree(array) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = array[i];
        }
        else if (array[i] > secondMax && array[i] < firstMax) {
            secondMax = array[i];
        }
        else if(array[i] > thirdMax && array[i] < secondMax)
        thirdMax = array[i];
    }
    return `firstmax ${firstMax} and secondMax ${secondMax} and thirdmax ${thirdMax}`
}
// let array = [1, 2, 3, 4, 5, 6];
// console.log(largestthree(array))

//  find the kth largest 

function kthlargest(array, k){
    let sortedarray = array.sort((a,b) => b-a)
    return sortedarray[k];
}
let array2 = [1, 2, 3, 6]
// console.log(kthlargest(array2, 0));



function factorial(n)
{
    if (n == 0 || n == 1) {
        return n;
    }
    return n* factorial(n-1);
}

// console.log(factorial(5));

























