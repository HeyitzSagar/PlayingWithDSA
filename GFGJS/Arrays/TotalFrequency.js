// write a javascript program to count the total frequency of the array elementts


function totalfrequency(arr)
{
    let obj = {};
    let totalfrequency = 0;

    for(const num of arr)
    {
        obj[num] = (obj[num] || 0) + 1;
    }
    console.log(obj);
    for(const i in  obj)
    {
        totalfrequency = totalfrequency + obj[i];
    }
    return totalfrequency;
}

let arr = [1, 1, 2, 2, 4];
console.log(totalfrequency(arr));

// { '1': 2, '2': 2, '4': 1 }  // 2 + 2 + 1
// 5