let array = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 80, 8, 80];

function removeunique(array) {
    let obj = {};
    for(const num of array)
        {
            obj[num] = (obj[num] || 0) +1;
        }
        let repeatedelement = Object.entries(obj).filter(([key, value]) => value !== 1).map(([key, value]) => Number(key));
        return repeatedelement;
}
console.log(removeunique(array));

