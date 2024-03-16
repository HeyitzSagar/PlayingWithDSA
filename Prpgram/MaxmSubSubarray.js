// Maximum Sum Subarray Problem (Kadane’s Algorithm)

// What is Kadane's Algorithm ?

// Kadane's Algorithm is a popular algorithm 
// used to find the maximum subarray sum in a
//  given array of integers. The problem is defined 
//  as follows: given an array of integers, 
//  find a contiguous subarray 
//  (containing at least one element) 
//  with the largest sum.

// The algorithm is named after its inventor,
//  Jay Kadane, who introduced it in 1984. 
//  The key insight behind Kadane's 
//  Algorithm is to keep track of the maximum 
//  subarray sum ending at each position in the array.
//   At each step, you compare the current element 
//   with the sum of the subarray ending at the 
//   previous position. If the current element is
//    greater, you include it in the subarray; 
//    otherwise, you start a new subarray from the
//     current element.

// Here is a simplified version of Kadane's
//  Algorithm in pseudocode:

// initialize:
//     max_ending_here = max_so_far = array[0]

// for i from 1 to length of array - 1:
//     max_ending_here = max(array[i], max_ending_here + array[i])
//     max_so_far = max(max_so_far, max_ending_here)

// return max_so_far



function kadanesAlgorithm(arr) {
    if (arr.length === 0) {
        return 0; // Edge case: empty array
    }

    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = kadanesAlgorithm(array);
console.log("Maximum Subarray Sum:", maxSum);
