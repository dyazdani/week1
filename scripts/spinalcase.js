"use strict";

//TODO Big O = O(n)

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


// function spinalCase(str) {
//   //putting space before capital letters
//   let regex = /[A-Z]/;
//   let regex2 = /[a-z]/;
//   let splitArr = str.split('');
//   console.log(splitArr);
//   for (let i = 1; i < splitArr.length; i++) { 
//     console.log("***");
//     let testRegex2 = regex2.test(splitArr[i - 1]);
//     let testRegex = regex.test(splitArr[i]); 

//     console.log(splitArr[i-1]);
//     console.log(testRegex2);
//     console.log(splitArr[i]);
//     console.log(testRegex);

//     if (testRegex2 && testRegex) {
//         splitArr.splice(i, 0, ' ');
//         console.log(splitArr);
//     }
//   }
//   console.log("Out of loop");
//   console.log(splitArr);
//   let finalStr = splitArr.join('');
//   console.log("finalStr after .join(): " + finalStr);
//   //replacing spaces with dashes
//   finalStr = finalStr.replaceAll(/\s/g, "-");
//   console.log("finalStr after replacing spaces with dashes: " + finalStr);
//   //replacing underscores with dashes
//   finalStr = finalStr.replaceAll(/[_]/g, "-");
//   console.log("finalStr after replacing underscores with dashes: " + finalStr);
//   //convert to lowercase
//   finalStr = finalStr.toLowerCase();
//   console.log("finalStr after .toLowerCase(): " + finalStr);
//   return finalStr;
// }
// let string = "HelloHowAreYou"
// console.log(spinalCase(string));


function spinalCase(str) {
  //putting space before capital letters
  let regex = /[A-Z]/;
  let regex2 = /[a-z]/;
  let splitArr = str.split('');
  for (let i = 1; i < splitArr.length; i++) { 
    let testRegex2 = regex2.test(splitArr[i - 1]);
    let testRegex = regex.test(splitArr[i]); 
    if (testRegex2 && testRegex) {
        splitArr.splice(i, 0, ' ');
    }
  }
  let finalStr = splitArr.join('');
  //replacing spaces with dashes
  finalStr = finalStr.replaceAll(/\s/g, "-");
  //replacing underscores with dashes
  finalStr = finalStr.replaceAll(/[_]/g, "-");
  //convert to lowercase
  finalStr = finalStr.toLowerCase();
  return finalStr;
}


module.exports = {spinalCase}; 