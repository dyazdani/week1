"use strict";
const {chunkArrayInGroups} = require("./../scripts/chunkarrayingroups");

describe("chunkArrayInGroups", () => {
    test("splits array into groups with specificied number of elements, and returns two-dimensional array", () => {
        let result = chunkArrayInGroups([1, 2, 3, 4, 5, 6], 3);
        expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6]]);
    })
    test("works when there is a remainder of elements in the last group", () => {
        let result = chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7], 2);
        expect(result).toStrictEqual([[1, 2], [3, 4], [5, 6], [7]]);
    })
    test("works with zero", () => {
        let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
        expect(result).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10]]);
    })
    test("works with strings", () => {
        let result = chunkArrayInGroups(["I", "am", "a", "little", "teapot"], 2);
        expect(result).toStrictEqual([["I", "am"], ["a", "little"], ["teapot"]]);
    })
})