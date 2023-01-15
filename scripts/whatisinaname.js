"use strict";

//TODO Big O = O(log n log)

// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns 
// an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the 
// collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// and the second argument is { last: "Capulet" }, then you must return the third 
// object from the array (the first argument), because it contains the name and its value, 
// that was passed on as the second argument.


function whatIsInAName(collection, source) {
    let resultArr = [];
    let currentObj;
    let matchCount = 0;
    let sourceArr = Object.keys(source);
    for (let i = 0; i < collection.length; i++) {
        currentObj = collection[i];
        for (const prop in source) {
                if (currentObj.hasOwnProperty(prop) && source[prop] === currentObj[prop]) {
     				 		matchCount++;
				}
        }
        if (matchCount === sourceArr.length) {
            resultArr.push(currentObj);
            matchCount = 0;
        }
        matchCount = 0;
    }
    return resultArr;
}


module.exports = {whatIsInAName};