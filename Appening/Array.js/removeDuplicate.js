let arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 87, 9];

function removeduplicates(array) {
    const obj = {};
    for(const num of array)
        {
            obj[num] = (obj[num] || 0) + 1;
        }
        let removeduplicates = Object.entries(obj).filter(([key, value]) => value === 1).map(([key, value]) => Number(key));
        return removeduplicates;
}
console.log(removeduplicates(arr));
