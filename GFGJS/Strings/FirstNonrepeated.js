//  find the element for the first non-repeated element inside the given string 

let string = "Sagar";

//  output = "S";


function firstnonrepeated(string)
{
    let str = string.toLowerCase();
    let obj = {};

    for(const item of str)
    {
        obj[item] = (obj[item] || 0) + 1;
    }
    let uniqueElements = Object.entries(obj).filter(([key, value]) => value == 1);
    let firstnonrepeated = uniqueElements[0][0];
    return firstnonrepeated;
}

console.log(firstnonrepeated(string));