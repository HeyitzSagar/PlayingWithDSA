//  search the element present inside the array or not in optimal way

    function BinarySearch(target, arr)
    {
        let low = 0;
        let high = arr.length + 1;
        while (low <= high) {
            const mid = Math.floor((low + high)/2);
            const midvalue = arr[mid];
            if (target == midvalue) {
                return mid + 1;
            }
            else if(target > midvalue)
            {
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
        return -1;
    }
    
    let array  = [10, 20, 30, 40, 50, 60, 70, 80];
    let target  = 20;

    console.log(BinarySearch(target, array));
    