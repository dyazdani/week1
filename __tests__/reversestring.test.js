"use strict";
const {reverseString} = require("./../scripts/reversestring");

describe("reverseString", () => {
    test("reverses order of string characters", () => {
        let result = reverseString("hello");
        expect(result).toBe("olleh");
    })
    test("reverses a string with numbers and symbols", () => {
        let result = reverseString("www.123.com");
        expect(result).toBe("moc.321.www");
    })
    test("reverses a long string", () => {
        let result = reverseString("supercalifragilistic");
        expect(result).toBe("citsiligarfilacrepus");
})
    test("reverses spaces and uppercase letters", () => {
        let result = reverseString("Hello There Mister");
        expect(result).toBe("retsiM erehT olleH");
    })
})
