"use strict";

//Big O = O(1)

//Reverse the provided string and return the reversed string.
//For example, "hello" should become "olleh".

function reverseString(str) {
    let arr = str.split('');
    let reverseArray = [];
    for (let i = 0; i < arr.length; i++) {
        reverseArray.unshift(arr[i]);
    }
   return reverseArray.join('');
  }

  module.exports = {reverseString};