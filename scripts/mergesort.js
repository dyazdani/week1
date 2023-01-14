"use strict";

//TODO Big O = O(log n log)

//Returns an array of numbers that is sorted from the smallest number to the largest.

function mergeSort(arr) {
    //base case, already sorted
    if (arr.length <= 1) {
        return [...arr];
    }
    //more than one element
    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);
    let sortedFirstHalf = mergeSort(firstHalf);
    let sortedSecondHalf = mergeSort(secondHalf);
    //merge sorted halves
    let result = [];
    while (sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0) {
        if (sortedFirstHalf.length === 0) {
           result.push(sortedSecondHalf.shift());
        } else if (sortedSecondHalf.length === 0){
            result.push(sortedFirstHalf.shift());
        } else {
            //both arrays still have elements
            let nextItem = sortedFirstHalf[0] < sortedSecondHalf[0] ? sortedFirstHalf.shift() : sortedSecondHalf.shift();
            result.push(nextItem);
        }   
    }
    return result;
    /* 
   - cut the array in half
    - if there is more than one number in each of the halves, cut each of them in half
    - keep doing this until there is only one number and cannot be split in half (i.e., when the "group" of numbers is sorted).
    - take left most number and compare it to the number just to the right.
    - place the smaller of the two numbers on the left and the other to the right of it
    - Work your way back up the tree of split numbers until you have an array of the same amount of numbers (nothing left to sort)
    - return the array
    */
}
module.exports = {mergeSort};

