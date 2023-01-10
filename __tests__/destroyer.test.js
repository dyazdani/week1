"use strict";
const {destroyer} = require("./../scripts/destroyer");

describe("destroyer", () => {
    test("Removes all elements from array that are same value as given arguments", () => {
        let result = destroyer([1, 2, 3, 4], 2);
        expect(result).toStrictEqual([1, 3, 4]);
    })
    test("works with many arguments, regardless of order", () => {
        let result = destroyer([1, 2, 3, 4, 5, 6, 7, 8], 4, 2, 6, 8);
        expect(result).toStrictEqual([1, 3, 5, 7]);
    })
    test("works with strings", () => {
        let result = destroyer(["She", "doesn't", "loves", "me",], "doesn't");
        expect(result).toStrictEqual(["She", "loves", "me"]);
    })
    test("Removes more than one instance of argument in array", () => {
        let result = destroyer(["a", "b", "b", "c", "c", "c"], "b", "c");
        expect(result).toStrictEqual(["a"]);
    })
    test("Return unaltered array if arguments are not in array", () => {
        let result = destroyer([5, 10, 15, 20, 25], 1, 2, 3);
        expect(result).toStrictEqual([5, 10, 15, 20, 25]);
    })
    test("works with array of strings and numbers", () => {
        let result = destroyer(["Red", 10, "Orange", 20, "Yellow", 30, "Green", 40, "Blue", -20, "Indigo", -10, "Violet", 0], 10, 0, "Violet", "Indigo", -20, -10, "Yellow", "Green", "Blue", 30, 20, "Orange");
        expect(result).toStrictEqual(["Red", 40]);
    })
})