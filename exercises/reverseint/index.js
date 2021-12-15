// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n.toString().split('').reverse().join('');
    str = parseInt(str);
    return str * Math.sign(n);
}

module.exports = reverseInt;

//#region solution 1 java like solution from leetcode
// function reverseInt(n) {
//     let max = Math.pow(2, 31) - 1;
//     let min = -1 * Math.pow(2, 31);
//     let mod = 0;
//     let rev = 0;
//     while (n != 0) {
//         mod = n % 10;
//         n = (n - mod) / 10;

//         //before adding the last number (last n)
//         if (rev > max / 10 || (rev === max / 10 && mod > 7)) return 0;
//         if (rev < min / 10 || (rev === min / 10 && mod < -8)) return 0;

//         rev = rev * 10 + mod;
//     }
//     return rev;
// }
//#endregion

//#region solution 2 convert to string
// function reverseInt(n) {
//     let x = Math.abs(n);
//     let str = x.toString().split('').reverse().join('');
//     str = parseInt(str);
//     return n < 0 ? -str : str;
// }
//#endregion

