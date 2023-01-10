"use strict";
const {mutation} = require("./../scripts/mutation");

describe("mutation", () => {
    test("Returns true if first element has all the letters in the second element ", () => {
        let result = mutation(["because", "cause"]);
        expect(result).toStrictEqual(true);
    })
    test("Returns false if not all letters in 2nd element are in 1st", () => {
        let result = mutation(["sordid", "soy"]);
        expect(result).toStrictEqual(false);
    })
    test("returns correct answer no matter the order of letters", () => {
        let result = mutation(["line", "neil"]);
        expect(result).toStrictEqual(true);
    })
    test("returns true if elements are the same", () => {
        let result = mutation(["same", "same"]);
        expect(result).toStrictEqual(true);
    })
    test("works with an empty string", () => {
        let result = mutation(["", "hi"]);
        expect(result).toStrictEqual(false);
    })
    test("duplicate letters will still return true", () => {
        let result = mutation(["nab", "banana"]);
        expect(result).toStrictEqual(true);
    })
    test("one letter difference will still return false", () => {
        let result = mutation(["face", "facet"]);
        expect(result).toStrictEqual(false);
    })
    test("capitalization should not affect results", () => {
        let result = mutation(["Jeremy", "Rej"]);
        expect(result).toStrictEqual(true);
    })
})
