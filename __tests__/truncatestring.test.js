"use strict";
const {truncateString} = require("./../scripts/truncatestring");

describe("truncateString", () => {
    test("Truncate a string (1st arg) if it is longer than given max length (2nd arg) and return it with ... at the end", () => {
        let result = truncateString("Bet I can make you laugh", 18);
        expect(result).toBe("Bet I can make you...");
    })
    test("Returns elipses with 0 max length", () => {
        let result = truncateString("Nothing is lost", 0);
        expect(result).toBe("...");
    })
    test("Returns an empty string if given as first argument with max length 0", () => {
        let result = truncateString("", 0);
        expect(result).toBe("");
    })
    test("Returns an empty string if given as first argument with max length > 0", () => {
        let result = truncateString("", 5);
        expect(result).toBe("");
    })
    test("returns whole string if max length is greater than string length", () => {
        let result = truncateString("Here we go loopdee loo", 30);
        expect(result).toBe("Here we go loopdee loo");
})
})