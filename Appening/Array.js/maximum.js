let arr = [-99, -100, -101, -201, -222, -382];


function maximumelement(arr) {
    let maximumelement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximumelement) {
            maximumelement = arr[i];
        }
        
    }
    return maximumelement;
}
console.log(maximumelement(arr));