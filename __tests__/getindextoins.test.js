"use strict";
const {getIndexToIns} = require("./../scripts/getindextoins");

describe("getIndexToIns", () => {
    test("returns lowest index in which 2nd arg can be inserted once array is sorted", () => {
        let result = getIndexToIns([4, 3, 1, 15, 20], 5);
        expect(result).toStrictEqual(3);
    })
    test("works with decimals", () => {
        let result = getIndexToIns([7.5, 4, 75.5, 66, 99, 3.33], 3.5);
        expect(result).toStrictEqual(1);
    })
    test("works with negative integers", () => {
        let result = getIndexToIns([-3, -66, -43, 23, 77], -14);
        expect(result).toStrictEqual(2);
    })
    test("works with zero", () => {
        let result = getIndexToIns([1, 7, 15, 20, 3, 25], 0);
        expect(result).toStrictEqual(0);
    })
    test("works with a duplicate value", () => {
        let result = getIndexToIns([10, 20, 30, 40, 50], 20);
        expect(result).toStrictEqual(1);
    })
    test("works with an empty array", () => {
        let result = getIndexToIns([], 1);
        expect(result).toStrictEqual(0);
    })
})