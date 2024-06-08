//  write a program to shift the zeros to the left side of the array

let array = [1, 2, 0, 4, 0, 6, 0, 9, 0, 11];

// output : [0 ,0 , 0, 0, 1, 2, 4, 6, 9, 11];


function ShiftArraystoleft(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == 0) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
            
        }
        
    }
    return array;
}
console.log(ShiftArraystoleft(array))