// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function slowFib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

function memoize(fn){
    const cache= {};
    return function(...args){
        if(cache[args]) return cache[args];
        cache[args] = fn.apply(this, args);
        return cache[args];
    }
}

const fib = memoize(slowFib);

module.exports = fib;

//#region Solution 1 Iterative
/*
function fib(n) {
    if (n <= 1) return n;
    let fn_1 = 0;
    let fn_2 = 1
    let num = fn_1 + fn_2;
    for (let i = 2; i <= n; i++) {
        num = fn_1 + fn_2;
        fn_1 = fn_2;
        fn_2 = num;
    }
    return num;
}
*/
//#endregion

//#region Solution 2 Recursive
/*
function fib(n) {
    //base case
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
*/
//#endregion

//#region Solution 3 Iterative (Dynamic Programming)
/*
const result = [];
    result[0] = 0;
    result[1] = 1;
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
*/
//#endregion

//#region Solution 4 Memoization

//#endregion