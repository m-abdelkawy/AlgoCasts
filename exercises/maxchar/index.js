// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    for (const char of str) {
        chars[char] = chars[char] + 1 || 1;
    }

    let count = 0;
    let char = '';

    for (const key in chars) {
        if (chars[key] >= count) {
            count = chars[key];
            char = key;

        }
    }

    return char;
}

//console.log("maxchar: " + maxChar("abcccccccd"));

module.exports = maxChar;
