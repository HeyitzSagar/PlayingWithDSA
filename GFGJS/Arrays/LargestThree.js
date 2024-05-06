
//  this is the cheapest way of doing the programming
// function LargestThree(arr) {
//     let arr1 = arr.sort((a, b) => b-a);
//     let LargestThree = arr1.splice(0, 3);
//     return LargestThree;
// }

let arr1 = [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 5];

// console.log(LargestThree(arr1));


// the best way to solve this question is this way 


function LargestThree(arr1) {
    let firstMax  = 0;
    let secondMax = 0;
    let thirdMax = 0;
    for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] > firstMax) {
                thirdMax  = secondMax;
                secondMax = firstMax;
                firstMax = arr1[i];
            }
            else if(arr1[i] > secondMax && arr1[i] < firstMax)
                {   
                    thirdMax = secondMax;
                    secondMax  = arr1[i];
                }
            else if(arr1[i] > thirdMax && arr1[i] < secondMax)
                {
                    thirdMax = arr1[i];
                }
    }
    return `${firstMax} and ${secondMax} and ${thirdMax}`
}
console.log(LargestThree(arr1));