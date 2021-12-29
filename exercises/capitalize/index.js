// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if(str[i-1] == ' '){
            res += str[i].toUpperCase();
        }else{
            res += str[i];
        }
    }
    return res;
}

console.log(capitalize('a short sentence'))


module.exports = capitalize;


//#region solution 1
// let str2 = ' ' + str;
//     let res = '';

    
//     let isFirstLetter = true;
//     for(let c of str){
//         if(isFirstLetter && c !== ' '){
//             res += c.toUpperCase();
//         }else{
//             res += c;
//         }
//         if(c == ' '){
//             isFirstLetter = true;
//         }else{
//             isFirstLetter = false;
//         }
//     }
//     return res;
//#endregion

//#region  solution 2
// let res = [];
// let words = str.split(' ');
// for (const word of words) {
//     res.push(word[0].toUpperCase() + word.slice(1));
// }
// return res.join(' ');
//#endregion

//#region solution 3
// let res = str[0].toUpperCase();
// for (let i = 1; i < str.length; i++) {
//     if(str[i-1] == ' '){
//         res += str[i].toUpperCase();
//     }else{
//         res += str[i];
//     }
// }
// return res;
//#endregion