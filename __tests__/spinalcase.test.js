"use strict";
const {spinalCase} = require("./../scripts/spinalcase");

describe("spinalCase", () => {
    test("converts string to all lowercase words connected by dashes", () => {
        let result = spinalCase("hello how are you");
        expect(result).toBe("hello-how-are-you");
    })
    test("works with uppercase", () => {
        let result = spinalCase("Hello How are you");
        expect(result).toBe("hello-how-are-you");
    })
    test("works with underscores", () => {
        let result = spinalCase("hello_how_are_you");
        expect(result).toBe("hello-how-are-you");
    })
    test("works with dashes", () => {
        let result = spinalCase("uh-oh how are-you");
        expect(result).toBe("uh-oh-how-are-you");
    })
    test("no spaces", () => {
        let result = spinalCase("HelloHowAreYou");
        expect(result).toBe("hello-how-are-you");
    })
    test("combination of no spaces, underscore, and uppercase", () => {
        let result = spinalCase("hello-howAre_you");
        expect(result).toBe("hello-how-are-you");
    })
})