"use strict";
//Big O = O(1)

function convertCtoF(celsius) {

    let fahrenheit = celsius * 1.8 + 32;
    fahrenheit = Math.round(fahrenheit);
    return fahrenheit;

}

module.exports = {convertCtoF};