// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let num = 0;
    const res = [];
    for (let i = 0; i < n; i++) {
        res[i] = [];
    }
    let stCol = 0;
    let endCol = n-1;
    let stRow = 0;
    let endRow = n-1;
    while(stCol<=endCol && stRow<=endRow){
        for (let i = stCol; i <= endCol; i++) {
            res[stRow][i] = ++num;
        }
        stRow++;

        for (let i = stRow; i <= endRow; i++) {
            res[i][endCol] = ++num;
        }
        endCol--;

        if(!(stCol<=endCol) || !(stRow<=endRow)) break;

        for (let i = endCol; i >= stCol; i--) {
            res[endRow][i] = ++num;
        }
        endRow--;

        for (let i = endRow; i >= stRow; i--) {
            res[i][stCol] = ++num;
        }
        stCol++;
    }
    return res;
}

module.exports = matrix;
