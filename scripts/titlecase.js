"use strict";

//Big O = O(n)

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let capWords = [];
    for (let x in arr) {
      capWords[x] = arr[x][0].toUpperCase() + arr[x].slice(1).toLowerCase();
    }
    return capWords.join(" ");
  }

module.exports = {titleCase};