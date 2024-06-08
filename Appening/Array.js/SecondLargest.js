//  WAP TO FIND THE SECOND LARGEST ELEMENT INSIDE THE ARRAY 

function secondLargest(array) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < array.length; i++) {
       if (array[i] > first) {
        second = first;
        first = array[i];
       }
       else if (array[i] > second && array[i] != first) {
            second = first;
       }
        
    }
    return second;

}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  output == 8
console.log(secondLargest(array));
