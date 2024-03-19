// challenge reverse string

// let str = "Hello"
// let reversestring = str.split('').reverse().join("");
// console.log(reversestring);

//  validate palindrome

// let str = "racear";

// function IsPalindrome(str)
// {
//     let str1 = str.split('').reverse().join('');
//     if (str1 == str) {
//         return true;
//     }
//     return false;
// }

// console.log(IsPalindrome(str));

//  integer reversal
// let num = 121;
// let n = Math.floor(121/10);
// let m = num % 10;
// console.log(m);
// console.log(n);

// function integerreversal(num)
// {
//     let reversed = 0;
//     while(num > 0)
//     {
//         const digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num/10);
//     }
//     return reversed;
// }

// console.log(integerreversal(122));

function mostrepeatedchar(str) {
  let str1 = str.toLowerCase().split("");
  let object = {};
  let maxNum = 0;
  let maxchar = "";
  for (const i of str1) {
    object[i] = (object[i] || 0) + 1;
  }
  for (const char in object) {
    if (object[char] > maxNum) {
      maxNum = object[char];
      maxchar = char;
    }
  }
  return maxchar;
}
// console.log(mostrepeated("sSSagaaar"));

//  check whether the number is prime or not

// function IsPrime(n) {
//   if (n <= 1) {
//     return "Number is not prime";
//   }

//   let sqrtN = Math.floor(Math.sqrt(n));
//   console.log(sqrtN);
//   for (let i = 2; i <= sqrtN; i++) {
//     if (n % i === 0) {
//       return "Number is not prime";
//     }
//   }
//   return "Number is prime";
// }

// console.log(IsPrime(17));

// function Isnumberpalindrome(n) {
//     let rem = 0;
//     let number = n;
//     let reverse = 0;
//     while(n > 0)
//     {
//          rem = n % 10;
//         reverse = reverse * 10 + rem;
//         n = Math.floor(n/10);
//     }
//     if (reverse === number) {
//         return 'Palindrome';
//     }
//     console.log(reverse)
//    return 'not palindrome';

// }

// console.log(Isnumberpalindrome(121));

function factorial(n) {
  let fact = 1;
  if (n == 0) {
    return 0;
  }
  for (let i = 1; i <= n; i++) {
     fact = fact * i;
  }
return fact;
}

// console.log(factorial(5));

//  check whether the given number is armstrong or not

function IsArmstron(n) {
    let Number = n
    let a = 0;
    let sum = 0;
    while( n > 0)
    {
        a = n%10;
        sum = sum +  (a *a*a) ;
        n = Math.floor(n/10);
        console.log(sum)
    }
    return sum === Number ? 'true' : 'false';
}
// console.log(IsArmstron(371))

//  find the sumofthedigits


// let digit = 123;
// // output = 6

// function sumofthedigits(n) {
//     let sum = 0;
//     let mod = 0;
//     while(n > 0)
//     {
//         mod = n % 10;
//         sum = sum + mod;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }
// console.log(sumofthedigits(87924657))


