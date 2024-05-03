//  find the greatest three elements from the array

// let arr1 = [10, 5, 6, 2, 6, 4, 9];

// output : 10, 9, 6

// this is the general method 

// function GreatestThree(arr1)
// {
//     let sortedarray = arr1.sort((a,b) => b-a);
//     let greatestthree = sortedarray.splice(0, 3);
//     return greatestthree;
// }

// console.log(GreatestThree(arr1));


function findGreatestThree(numbers) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let num of numbers) {
        if (num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (num > thirdMax) {
            thirdMax = num;
        }
    }

    return [firstMax, secondMax, thirdMax];
}

// Example usage:
const numbers = [10, 5, 20, 15, 30, 25];
const [firstMax, secondMax, thirdMax] = findGreatestThree(numbers);
console.log("First maximum:", firstMax);
console.log("Second maximum:", secondMax);
console.log("Third maximum:", thirdMax);
