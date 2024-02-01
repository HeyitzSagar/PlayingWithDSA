//  check whether an string is a anagram or not

function checkAnagram(str1, str2) {
  const formatstr1 = str1.replace(/\s/g, "").toLowerCase();
  const formatstr2 = str2.replace(/\s/g, "").toLowerCase();

  if (formatstr1.length !== formatstr2.length) {
    return false;
  }

  // sort the characters in both strings and compare
  const sortedstr1 = formatstr1.split("").sort().join("");
  const sortedstr2 = formatstr2.split("").sort().join("");

  if (sortedstr1 === sortedstr2) {
    return "Anagram";
  } else return "Not Anagram";
}
console.log(checkAnagram("Sagar", "Sumit"));

let string1 = "listen";
let string2 = "Sagar";
console.log(checkAnagram(string1, string2));
