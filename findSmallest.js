function MinimumElement(array) {
    let minimum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
        
    }
    return minimum;
}
let array = [10, 20, 40, 55, 433, 55, 332, 44]
console.log(MinimumElement(array));
