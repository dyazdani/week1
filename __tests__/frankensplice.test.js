"use strict";
const {frankenSplice} = require("./../scripts/frankensplice");

describe("frankenSplice", () => {
    test("inserts elements of 1st array into 2nd array =, in order, at provided index and returns new array", () => {
        let result = frankenSplice([3, 4], [1, 2, 5, 6], 2);
        expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
    })
    test("function should work with strings", () => {
        let result = frankenSplice(["trains", "and"], ["planes", "automobiles"], 1);
        expect(result).toStrictEqual(["planes", "trains", "and", "automobiles"]);
    })
    test("function should work with strings and numbers together", () => {
        let result = frankenSplice([1, 2, 3], ["a", "b", "c", "easy as"], 4);
        expect(result).toStrictEqual(["a", "b", "c", "easy as", 1, 2, 3]);
    })
    test("funtion should work with an empty array", () => {
        let result = frankenSplice([9, 8, 7, 6, 5, 4, 3, 2, 1], [], 0);
        expect(result).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    })
})