//  check whether an string is a anagram or not

function checkAnagram(string1, string2) {
  let stringcopy = string1;
  for (let index = 0; index < stringcopy.length; index++) {
    const lettercheck = string1[index];
    if (string1.includes(lettercheck)) {
      return " Anagram";
    }
  }
  return "Not Anagram";
}


let string1 = "listen";
let string2 = "Sagar"
console.log(checkAnagram(string1, string2));
