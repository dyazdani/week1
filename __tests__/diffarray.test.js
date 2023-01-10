"use strict";
const {diffArray} = require("./../scripts/diffarray");

describe("diffArray", () => {
    test("Returns array with only items found in ne but not both arrays", () => {
        let result = diffArray([1, 2, 3, 4, 5], [2, 4, 6, 8]);
        expect(result).toStrictEqual([1, 3, 5, 6, 8]);
    })
    test("works with strings", () => {
        let result = diffArray(["one", "two", "three", "four", "five"], ["two", "four", "six", "eight"]);
        expect(result).toStrictEqual(["one", "three", "five", "six", "eight"]);
    })
    test("works regardless of order", () => {
        let result = diffArray([-2, 0, -1, 2, 1], [-4, 0, -3, 4, 1]);
        expect(result).toStrictEqual([-2, -1, 2, -4, -3, 4]);
    })
    test("Should return [] when there is a match of all items", () => {
        let result = diffArray(["spring", 1, "summer", 2, "fall", 3], [1, 2, 3, "spring", "summer", "fall"]);
        expect(result).toStrictEqual([]);
    })
    test("returns correct array when one argument is []", () => {
        let result = diffArray([], ["robot", "chicken", "bak, bleep, bak, borp"]);
        expect(result).toStrictEqual(["robot", "chicken", "bak, bleep, bak, borp"]);
    })
})