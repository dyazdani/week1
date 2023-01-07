"use strict";
const {booWho} = require("./../scripts/boowho");

describe("booWho", () => {
    test("Check if a value is classified as a Boolean primitive", () => {
        let result = booWho(false);
        expect(result).toBe(true);
    })
    test("True Boolean should return true", () => {
        let result = booWho(true);
        expect(result).toBe(true);
    })
    test("object should return false", () => {
        let result = booWho({ "a": 1 });
        expect(result).toBe(false);
    })
    test("array should return false", () => {
        let result = booWho([3, 5]);
        expect(result).toBe(false);
    })
    test("string should return false", () => {
        let result = booWho("true");
        expect(result).toBe(false);
    })
    test("number should return false", () => {
        let result = booWho(6);
        expect(result).toBe(false);
    })
    test("undefined should return false", () => {
        let result = booWho(undefined);
        expect(result).toBe(false);
    })
    test("NaN shoudl return false", () => {
        let result = booWho(NaN);
        expect(result).toBe(false);
    })
})