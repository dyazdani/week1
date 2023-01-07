"use strict";
const {findElement} = require("./../scripts/findelement");

describe("findElement", () => {
    test("returns 1st element of array that passes 'truth test'", () => {
        let result = findElement([1, 3, 5, 6, 7, 9, 10], function(num) { return num % 2 === 0; });
        expect(result).toBe(6);
    })
    test("returns undefined if no element passes 'truth test'", () => {
        let result = findElement([1, 3, 5, 11, 7, 9, 13], function(num) { return num % 2 === 0; });
        expect(result).toBe(undefined);
    })
})