// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB.replace(/[^\w]/g, "").toLowerCase();

    let map1 = {};
    let map2 = {};

    for (const char of stringA) {
        map1[char] = map1[char] + 1 || 1;
    }
    for (const char of stringB) {
        map2[char] = map2[char] + 1 || 1;
    }

    
    if(Object.keys(map1).length != Object.keys(map2).length) return false;
    for (const prop in map1) {
        if(!map2.hasOwnProperty(prop) || map1[prop] != map2[prop]) return false;
    }
    return true;
}


// anagrams("abc", "bca");

module.exports = anagrams;
