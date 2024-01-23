//  write a function which takes a string and calculate
//  the total number of vowels in it

let name = "Sagar";
//  total no of the vowel is 2 // a, a

function countVowels(input) {
  const vowels = "aeiouAEIOU";

  let vowelCount = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(countVowels(name));

// calculating the consonants in a string

function calculateconsonant(input) {
    const vowel = "aeiouAEIOU";
    let consonentcount = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        if (!vowel.includes(char)) {
            consonentcount++;
        }
        
    }
    return consonentcount;
}

console.log(calculateconsonant(name));