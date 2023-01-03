"use strict";
const {factorialize} = require("./../scripts/factorialize");

describe("factorialize", () => {
    test("returns factorial of input integer", () => {
        let result = factorialize(5);
        expect(result).toBe(120);
    })
    test("returns the factorial of 0", () => {
        let result = factorialize(0);
        expect(result).toBe(1);
    })
    test("returns factorial of large number", () => {
        let result = factorialize(50);
        expect(result).toBe(30414093201713378043612608166064768844377641568960512000000000000);
    })
    test("returns a number", () => {
        let result = factorialize(9);
        expect(result).toBe(362880);
    })
})