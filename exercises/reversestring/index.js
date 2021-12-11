// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split("");
    const reversed = arr.reduce((rev, char) => char + rev, '');
    return reversed;
}

console.log(reverse('abcd'));
console.log(reverse('abcd'));

module.exports = reverse;

//#region Solution 1
// function reverse(str) {
//     let splitString = str.split("");
//     splitString.reverse();
//     return splitString.join("");
// }
//#endregion

//#region Solution 2
// function reverse(str) {
//     for(let i = 0; i < str.length/2; i++){
//         let temp = str.charAt(i);
//         str = str.replaceAtIndex(i, str.charAt(str.length - 1 - i));
//         str = str.replaceAtIndex(str.length - 1 - i, temp);
//     }
//     return str;
// }

// String.prototype.replaceAtIndex = function(index, c){
//     return this.substring(0, index) + c + this.substring(index + c.length);
// }
//#endregion

//#region Solution 3
// function reverse(str) {
//     let reversed = "";
//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }
//#endregion

//#region Solution 4
// function reverse(str) {
//     const arr = str.split("");
//     const reversed = arr.reduce((rev, char) => char + rev, '');
//     return reversed;
// }
//#endregion