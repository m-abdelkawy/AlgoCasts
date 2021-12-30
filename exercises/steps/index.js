// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    stepsRecursive(n, 0, '');
}
function stepsRecursive(n, row = 0, stair = '') {
    //base case
    if (row === n) return;

    if (stair.length === n) {
        console.log(stair);
        return stepsRecursive(n, row + 1);
    }

    if (stair.length <= row)
        stair += '#';
    else
        stair += ' ';
    stepsRecursive(n, row, stair);
}

steps(4);

module.exports = steps;


//#region Solution1
// for (let i = n; i > 0; i--) {
//     let str = '';
//     for (let j = n - i + 1; j > 0;j--) {
//         str+="#";
//     }
//     for (let k = i-1; k >0; k--) {
//         str+= ' ';
//     }
//     console.log(str);
// }
//#endregion

//#region solution2
// for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let col = 0; col < n; col++) {
//         if(col <= row){
//             stair += "#";
//         }else{
//             stair += ' ';
//         }
//     }
//     console.log(stair);
// }

//#endregion

//#region solution3
// function steps(n) {
//     printhash(n,n);
// }
// function printhash(n, level){
//     //base case
//     if(level === 0) return;
//     let str = '';
//     for (let i = 0; i < n-level+1; i++) {
//         str+="#";
//     }
//     for (let j = 0; j < level-1; j++) {
//         str += ' ';
//     }
//     console.log(str);
//     printhash(n, level-1);
// }
//#endregion

//#region solution 4

//#endregion