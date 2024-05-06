// let arr = [2, 4, 5, 6, 2, 4, 6, 2, 4, 6, 4, 9];

//  find the first  non-repeated element in the array;


function nonrepeated(arr)
{
    let obj = {};

    for(const num of arr)
    {
        obj[num] = (obj[num] || 0) + 1;
    }
    let nonrepeated = Object.entries(obj).filter(([key, value]) => value == 1);
    let firstnonrepated = nonrepeated[0][0];
    return firstnonrepated;
}

// console.log(nonrepeated(arr));


//  given an array of elements move the zeros to the left of the array


let arr1 = [2, 0, 4, 0, 5, 0];

//  output = [2, 4, 5, 0, 0, 0];

// function moveszeros(arr1)
// {
//     for(let i= 0; i< arr1.length; i++)
//     {
//         for (let j = i+1; j < arr1.length; j++) {
//             if (arr1[i] == 0) {
//                 const temp = arr1[i];
//                 arr1[i] = arr1[j];
//                 arr1[j] = temp;
//             }
            
//         }
//     }
//     return arr1;
// }
// console.log(moveszeros(arr1));



let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age);
console.log(newObj.age);
