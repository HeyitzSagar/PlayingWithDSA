let array = [-99, -100, -101, -102, -103, -301];

function Minimum(array) {
    let Minimum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < Minimum) {
            Minimum = array[i]
        }
        
    }    
    return Minimum;
}
console.log(Minimum(array));
