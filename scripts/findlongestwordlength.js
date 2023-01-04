"use strict";

//TODO Big O = ?

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let currentLength = 0;
    let longestLength = 0;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        currentLength = arr[i].length;
        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }
    return longestLength;
  }

module.exports = {findLongestWordLength};