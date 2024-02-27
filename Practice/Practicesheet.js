//  palindrome number

// let num1 = 121;
// m = num1 % 10;
// console.log(m);
// n = Math.ceil(num1 / 10);
// console.log(n);

function checkPalindrome(num)
{   
    let newnum;
    let n =  Math.floor(num/10);    
    let m = num % 10;
    newnum = n * 10 + m;
    return newnum === num ? 'Palindrome' : 'Not Palindrome';

}
console.log(checkPalindrome(num1))

