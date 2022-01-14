// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;

//#region Solution 1
/*
function vowels(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let countVowels = 0;
    const strLowerCase = str.toLowerCase();
    for (const letter of strLowerCase) {
        if(vowelsArr.includes(letter)){
            countVowels++;
        }
    }
    return countVowels;
}
*/
//#endregion

//#region Solution 2
/*
function vowels(str) {
    let count = 0;
    const checker = 'aeiou';
    const strToLower = str.toLowerCase();
    for(const letter of strToLower){
        if(checker.includes(letter)) count++;
    }
    return count;
}
*/
//#endregion

//#region Solution 3 REGEX

//#endregion