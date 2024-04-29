// create an object from two arrays in JavaScript

let a = [1,2,3,4];
let b = ["sagar", "sumit", "sandhya", "geeta"];

// approach
//  check whether both arrays have same length, then only proceed


function convertArraytoOject(a, b) {
    if (a.length != b.length || a.length == 0 || b.length == 0) {
        return null;
    }
    let obj = {};
    a.forEach((k, i) => {
        // console.log(`${obj[k]} and ${b[i]}`);
        obj[k] = b[i];
    });
    return obj;
}
console.log(convertArraytoOject(a, b));