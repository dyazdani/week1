"use strict";
const {bouncer} = require("./../scripts/bouncer");

describe("bouncer", () => {
    test("filters out falsy values from array and returns new array", () => {
        let result = bouncer([false, 1, 6, NaN, "hello"]);
        expect(result).toStrictEqual([1, 6, "hello"]);
    })
    test("works with empty strings", () => {
        let result = bouncer(["go", "get", "", "em", "tiger"]);
        expect(result).toStrictEqual(["go", "get", "em", "tiger"]);
    })
    test("works with zero", () => {
        let result = bouncer([5, 3, 4, 23, 0, 55, 0, 99]);
        expect(result).toStrictEqual([5, 3, 4, 23, 55, 99]);
    })
    test("works with null", () => {
        let result = bouncer([9, "eight", 7, null, "six", 5, null, 4]);
        expect(result).toStrictEqual([9, "eight", 7, "six", 5, 4]);
    })
    test("works with undefined", () => {
        let result = bouncer(["that", "work", "is", null, "and void and well", undefined, "defined"]);
        expect(result).toStrictEqual(["that", "work", "is", "and void and well", "defined"]);
    })
})