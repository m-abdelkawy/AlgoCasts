// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - 1 - index];
    })
}

palindrome('abba');

module.exports = palindrome;


//#region Solution 1
// function palindrome(str) {
//     // reverse str
//     const reversed = str.split('').reduce((rev, char)=> char + rev, '');
//     //or
//     //const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
//#endregion