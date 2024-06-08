// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let array = [2, 7, 11, 15];
let target = 9;

function TwoSum(array) {
    let index = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                index.push(i, j);
            }
            
        }
    }
    return index;
}
console.log(TwoSum(array, target))