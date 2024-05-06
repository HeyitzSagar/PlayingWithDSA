// console.log(a);
// console.log(b);
// console.log(c);


// let a  = 10;    //  refernce error
// const b = 20;  /// reference defined 
// var c = 30;   // undefined


// console.log(abc());

// const abc = () => {
//     return 5;
// }



// console.log(abc());

// function abc()
// {
//     return 5;
// }


//  write a program to find the two largest number

// let arr1 = [15, 20, 5, 2, 4, 6, 8, 9];




// output   9, 8


function TwoLargestNumber(arr1)
{
    let firstMax = 0;
    let secondMax = 0;

    for(let i = 0; i<arr1.length; i++)
    {
        if (arr1[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr1[i];
        }
        else if(arr1[i] > secondMax && arr1[i] < firstMax)
        {
            secondMax = arr1[i];
        }
    }

    return `first largest: ${firstMax} and secondlargest : ${secondMax}`;
}

// console.log(TwoLargestNumber(arr1));


// Make this a promise and it should print 
// 1000 after 1000 sec
// 2000 after 1000 +2000 sec
// 3000 after 1000 + 2000 + 3000 sec
// 4000 after 1000 + 2000 + 3000 + 4000 sec

let arr2 = [4000, 1000, 3000, 2000]

let sortedarray = arr2.sort((a, b) => a-b);
var Result = 0;
for(let i = 0; i<sortedarray.length; i++)
{
    
    Result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sortedarray[i]);
        }, sortedarray[i]);
    })
    Result.then((i) => {
        console.log(i);
    }).catch((err) => {
        console.log(err);
    })
}




const obj = {
	a :{
		b: {
			c : "test",
			d: {
				e : "test"
			}
		}
	}
}


op = {
	a_b_c : "test",
	a_b_d_e : "test"
}


// let key = Object.keys(obj);
// console.log(key);
function nestedobj(obj)
{

}



// let newarra = arr1.map((item) => {
//      item * (logic)return
// })


let arr1  = [1, 2, 3];

let newarra = arr1.map((item) => {
    return item * 2;
})
// console.log(newarra)


// function arrmultiplier(arr1)
// {
//     let newvalue = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let value = arr1[i] * 2;
//         newvalue.push(value);
//     }
//     return newvalue;
// }

// console.log(arrmultiplier(arr1));


// const add = (a, b, c) => a + b + c
// add(2,3,4)
// add(2)(3)(4)

// function add(a)
// {
//     return function (b) {
//         return function (c) {
//             return a+b+c;
//         }
//     }
// }

// function add(a) {
//    return function (params) {
    
//    }
// }


// console.log(add(2, 4, 5,6))
// // console.log(add(2)(3)(4));
// add(2)(3)(4)(5)(6)


// function add(x) {
//     return function(y) {
//       if (y === undefined) {
//         return x;
//       } else {
//         return add(x + y);
//       }
//     };
//   }
  
//   const result = add(2)(3)(4)(5)(6);
//   console.log(result); // Output: 20
  

console.log('A');
setTimeout(() => {
   console.log('B') 
} );

['C', 'D'].forEach((item) => console.log(item));
console.log('E')










