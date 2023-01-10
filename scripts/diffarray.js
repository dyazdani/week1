"use strict";

//TODO Big O = O(n)

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    const newArr = [];
    
    //Iterate through arr1 elements and push elements not included in arr2 to NewArr.
    arr1.forEach(element => {
        if(!arr2.includes(element)) {
            newArr.push(element);
        }
    }
    );

//Iterate through arr2 elements and push elements not included in arr1 to NewArr.
    arr2.forEach(element => {
        if(!arr1.includes(element)) {
            newArr.push(element);
        }
    }
    );

    return newArr;
  }

module.exports = {diffArray};
