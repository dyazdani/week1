"use strict";

//TODO Big O = O(n^2)

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.


function destroyer(arr) {
	let argArr = [];
	let finalArr = [];
	for (let i = 1; i < arguments.length; i++) {
		argArr.push(arguments[i]);
	}
	for (let i = 0; i < arr.length; i++) {
			if (!argArr.includes(arr[i])) {
				finalArr.push(arr[i]);
		}
	}
	return finalArr;
}

module.exports = {destroyer};