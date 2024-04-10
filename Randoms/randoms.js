// // let input = "SE@NW+E(L=L)";
// // let result = input.replace(/[^a-zA-Z0-9]/g, '');
// // console.log(result);

// // let input = "SE@NW+E(L=L)123";
// // let result = "";

// // for (let i = 0; i < input.length; i++) {
// //     let char = input[i];
// //     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
// //         result += char;
// //     }
// // }

// // console.log(result);

// //  sort an array

// // function sortarray(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     for (let j = i + 1; j < array.length; j++) {
// //       if (array[i] > array[j]) {
// //         const temp = array[i];
// //         array[i] = array[j];
// //         array[j] = temp;
// //       }
// //     }
// //   }
// //   return array;
// // }

// // let array = [10, 5, 7, 8, 9, 11, 12, 33]
// // console.log(sortarray(array));

// // let input = "SE@NW+E(L=L)123";


// // function withoutspecial(input)
// // {
// //   let result = "";
// //   for (let i = 0; i < input.length; i++) {
// //     const element = input[i];
// //     if ((element >= 'a' && element <= 'z' ) || (element >= 'A' && element <= 'Z' )) {
// //       result += element;
// //     }
    
// //   }
// //   return result;
// // }

// // console.log(withoutspecial(input))





// const a = [1,0,2,0,3,4,0]
// // move all zeros at the end
 
// // output = [1,2,3,4,0,0,0]

// function movezerosatend(a)
// {
//     for(let i = 0; i<a.length; i++)
//     {
//       for(let j = i + 1; j<a.length; j++)
//       {
//           if(a[i] == 0)
//           {
//               const temp = a[i];
//               a[i] = a[j];
//               a[j] = temp;
//           }
//       }
//     }
//     return a;
// }

// console.log(movezerosatend(a));


// let a  = null;
// let b = undefined;
// console.log(typeof a);
// console.log(typeof b);


// let a = 2;
// console.log(typeof a);


// let result  = a.toString();
// console.log(typeof result);

// const foodMaker = a => {
//     return a instanceof Function ? a() : a;
// };

// console.log(foodMaker(() => 'Pizza'));
// console.log(foodMaker('Pasta'));

// const myFunc = str => {
//     if (str.length > 1) {
//         return myFunc(str.slice(1));
//     }
//     return str;
// }
// console.log(myFunc('Super Coder'));

// function person() {
//     this.name = 'rahul';
// }

// function obj() {
//     obj.call(this);
// }

// obj.prototype = Object.create(person.prototype);
// const app = new obj();
// console.log(app.name)

// const arr = [1, 99, 44, 22, 33, 55];
// function greatestNumberInArray(arr) {
//     let greatest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (greatest < arr[i]) {
//             greatest = arr[i];
//         }
        
//     }   
//     return greatest;
// }
// console.log(greatestNumberInArray(arr));


// var fNUmbers = function (q) {
//     if (q === 1) {
//         return [0,1];
//     }
//     else{
//         var z = fNUmbers(q-1);
//         z.push(z[z.length] + z[z.length -1]);
//         return z;
//     }
// };
// console.log(fNUmbers(9));
// var fNumbers = function (q) {
//     if (q === 1) {
//         return [0, 1];
//     } else {
//         var z = fNumbers(q - 1);
//         z.push(z[z.length - 1] + z[z.length - 2]); // Corrected the indices for accessing the last two elements
//         return z;
//     }
// };
// console.log(fNumbers(10)); // Adjusted to generate Fibonacci sequence up to 10th term


// const currentTime = new Date();
// console.log(currentTime);
// const tenMinutesBefore = new Date(currentTime.getTime() - 10 * 60000);
// console.log(tenMinutesBefore);