"use strict";
const {sumAll} = require("./../scripts/sumall");

describe("sumAll", () => {
    test("Sum of given numbers plus all integers in between", () => {
        let result = sumAll([2, 10]);
        expect(result).toBe(54);
    })
    test("Works with negative integers", () => {
        let result = sumAll([-5, 6]);
        expect(result).toBe(6);
    })
    test("Works with just zero", () => {
        let result = sumAll([0, 0]);
        expect(result).toBe(0);
    })
    test("Works with zero and other integers", () => {
        let result = sumAll([0, -9]);
        expect(result).toBe(-45);
    })
    test("Works regardless of order", () => {
        let result = sumAll([11, 5]);
        expect(result).toBe(56);
    })
})