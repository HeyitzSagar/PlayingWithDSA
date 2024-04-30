//  Aba

function checkpalindrome(str) {

    for(let i = 0; i<str.length/2; i++)
    {
            if (str[i] != str[str.length -1 -i]      ) {
                return `not palindrome`;
            } 
    }
    return `Palindrome`;
}

console.log(checkpalindrome("aabaa"));