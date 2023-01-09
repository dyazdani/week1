"use strict";

//Big O = O(n)

// Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let j = size;
    for (let i = 0; i < arr.length; i += j) {
        newArr.push(arr.slice(i, i + j));
    }
    return newArr;
  }

module.exports = {chunkArrayInGroups};