"use strict";

//Big O = O(n)

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


function mutation(arr) {
	let newArr = [];
	let boolAnswer;
	newArr.push(arr[0].toLowerCase());
	newArr.push(arr[1].toLowerCase());

	for (let i = 0; i < newArr[1].length; i++) {
		if (!newArr[0].includes(newArr[1][i])) {
		boolAnswer = false;
		break;
		} else {
		boolAnswer = true;
		}
	}

return boolAnswer;

}

module.exports = {mutation};