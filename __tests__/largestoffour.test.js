"use strict";
const {largestOfFour} = require("./../scripts/largestoffour");

describe("largestOfFour", () => {
    test("Returns an array consisting of the largest numbers from sub-arrays", () => {
        let result = largestOfFour([[1, 2, 3], [4, 5, 6], [11, 15, 20], [7, 54, 6]]);
        expect(result).toStrictEqual([3, 6, 20, 54]);
    })
    test("returns correct array given negative integers", () => {
        let result = largestOfFour([[-6, -3, -1], [-35, -72, -63], [-5, -10, 10], [4, 20, -8]]);
        expect(result).toStrictEqual([-1, -35, 10, 20]);
    })
    test("returns correct array given sub-arrays with zero in them", () => {
        let result = largestOfFour([[4, 0, 6], [30, 2, 0], [0, 0, 0], [70, 100, 0]]);
        expect(result).toStrictEqual([6, 30, 0, 100]);
    })
    test("returns correct array given many elements in sub-arrays", () => {
        let result = largestOfFour([[5, 2, 8, 6, 4, 2, 44], [68, 39, 5, 10, 49, 65], [99, 33, 55, 22], [5, 1, 90, 77, 400, 600]]);
        expect(result).toStrictEqual([44, 68, 99, 600]);
    })
})



























