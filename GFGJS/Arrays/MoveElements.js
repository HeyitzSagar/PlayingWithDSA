// write a program to move the elements at the end of the array 
// using k times




let arr1 = [2, 3, 6, 1, 9, 5];

let k = 2;

// output = [6, 1, 9, 5, 2, 3];


// Move the elements at the end of the array k times
for (let i = 0; i < k; i++) {
    for (let j = 0; j < arr1.length -1; j++) {
        let temp = arr1[j]; // Store the current element in a temporary variable
        arr1[j] = arr1[j + 1]; // Move the next element to the current position
        arr1[j + 1] = temp; // Move the current element to the next position
    }
}

console.log(arr1); // Output the modified array
