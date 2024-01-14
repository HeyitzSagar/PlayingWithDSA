function MaximumElement(array) {
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
        
    }
    return maximum;
}
let array = [10, 20, 40, 55, 433, 55, 332, 44]
console.log(MaximumElement(array));
