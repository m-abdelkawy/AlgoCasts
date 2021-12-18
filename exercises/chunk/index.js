// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let stIndex = 0;
    while (stIndex < array.length) {
        chunked.push(array.slice(stIndex, stIndex + size));
        stIndex += size;
    }
    return chunked;
}

const arr = [1, 2, 3, 4, 5];
const chunked = chunk(arr, 3);

console.log(chunked);

//#region Solution 1
// function chunk(array, size) {
//     let res = [];
//     let innerArr = [];
//     for (let i = 0, j = 0; i < array.length && j < size; i++) {
//         innerArr.push(array[i]);
//         j++;
//         if (j == size || i == array.length - 1) {
//             j = 0;
//             res.push(innerArr);
//             innerArr = [];
//         }
//     }
//     return res;
// }
//#endregion

//#region solution 2
// function chunk(array, size) {
//     let chunked = [];

//     for (const item of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length == size) {
//             chunked.push([item]);
//         }
//         else{
//             last.push(item);
//         }
//     }

//     return chunked;
// }
//#endregion

//#region solution 3
// function chunk(array, size) {
//     let chunked = [];
//     let stIndex = 0;
//     while (stIndex < array.length) {
//         chunked.push(array.slice(stIndex, stIndex + size));
//         stIndex += size;
//     }
//     return chunked;
// }
//#endregion
module.exports = chunk;
