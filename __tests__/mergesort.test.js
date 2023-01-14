"use strict";
const {mergeSort} = require("./../scripts/mergesort");

describe("mergeSort", () => {
    test("Returns an array of numbers sorted from smallest to largest", () => {
        let result = mergeSort([2, 5, 10, 6, 1, 9]);
        expect(result).toStrictEqual([1, 2, 5, 6, 9, 10]);
    })
    test("Works with negative integers", () => {
        let result = mergeSort([9, -15, 4, -3, -7, 6]);
        expect(result).toStrictEqual([-15, -7, -3, 4, 6, 9]);
    })
    test("Works with zero and positive integers", () => {
        let result = mergeSort([6, 23, 76, 21, 2, 0, 5, 16]);
        expect(result).toStrictEqual([0, 2, 5, 6, 16, 21, 23, 76]);
    })
    test("Works with duplicate input elements", () => {
        let result = mergeSort([40, 10, 5, 5, 7, 29, 14, 14, 66, 33]);
        expect(result).toStrictEqual([5, 5, 7, 10, 14, 14, 29, 33, 40, 66]);
    })
})