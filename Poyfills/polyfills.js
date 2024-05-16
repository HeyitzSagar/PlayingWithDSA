// I will be covering the map, filter and reduce, some of its questions and examples..

//  what is map() ? 
//  map method is used to creating a new array from an existing array

// let arr1 = [1,2 , 3, 5, 6];

// let newarra1 = arr1.map((item, index, arr1) => {
//     return item * 2;
// } )
// console.log(newarra1);
// [ 2, 4, 6, 10, 12 ]


// reduce()   
// const num = [1, 2, 3, 4, 5];

// const sum  = num.reduce((acc, curr, index, num) => acc + curr , 0);
// console.log(sum);


// lets create the polyfills from the scratch

Array.prototype.myMap = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this)); 
    }
    return temp;
}


// polyfills for the filter
Array.prototype.myfilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i, i, this])) {
            temp.push(this[i]);
        }
        
    }
    return temp;
}


// polyfills for the reduce

Array.prototype.myreduce = function (cb, intialvalue) {
    var acc = intialvalue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
        
    }
    return acc;
}
