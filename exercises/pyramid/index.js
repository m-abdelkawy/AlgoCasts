// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        let stIndex = Math.floor((2 * n - 1) / 2 - row);
        let endIndex = Math.floor((2 * n - 1) / 2 + row);
        for (let col = 0; col < 2 * n - 1; col++) {
            if(str.length < stIndex || str.length > endIndex){
                str += ' ';
            }else{
                str += '#';
            }
        }
        console.log(str);
    }
}

pyramid(5);

module.exports = pyramid;


//#region solution 1 recursive
// function pyramid(n) {
//     pyramidRecursive(n, 0, '');
// }

// function pyramidRecursive(n, row = 0, str = ''){
//     if(row === n) return;

//     if(str.length === 2*n - 1){
//         console.log(str);
//         return pyramidRecursive(n, row + 1);
//     }

//     if(str.length < ((2*n - 1) - (2*row + 1))/2 || str.length >= (2*n - 1)/2 + (2*row + 1)/2 ){
//         str += ' ';
//     }else{
//         str += '#';
//     }
//     pyramidRecursive(n, row, str);
// }
//#endregion

//#region solution 2 iterative
 
//#endregion