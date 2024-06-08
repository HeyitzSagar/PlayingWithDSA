let arr = [1, 11, 2, 13, 4, 55, 7, -99];

function sortarray(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        
       }
        
    }
    return array;
}
console.log(sortarray(arr));

