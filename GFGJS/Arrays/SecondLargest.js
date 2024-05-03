//  given an array of the elements find the second largest element 

let arr1 = [6, 2, 6, 9, 0, 13];

// output : 9

function secondlargest(arr1) {
    let firstMax = arr1[0];
    let secondMax = arr1[1];
    let thirdMax = arr1[2];
    for(let i = 3; i<arr1.length; i++)
    {
        let element = arr1[i];
        if (arr1[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = element;
        }
        else if (element > secondMax && element < firstMax) {
            secondMax = element;
            thirdMax = secondMax;
        }
        else if (element > thirdMax && element < secondMax)
        {
            thirdMax = element;
        }
    }
    return `firstmax : ${firstMax} and secondMax: ${secondMax} and thirdmax: ${thirdMax}`;
}
console.log(secondlargest(arr1));