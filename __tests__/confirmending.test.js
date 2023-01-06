"use strict";
const {confirmEnding} = require("./../scripts/confirmending");

describe("confirmEnding", () => {
    test("Returns correct Boolean value answering if input string ends with target string", () => {
        let result = confirmEnding("The last word is pork", "pork");
        expect(result).toBe(true);
    })
    test("Returns false if string does not end with target string", () => {
        let result = confirmEnding("The last word in this sentence is bongo", "dingo");
        expect(result).toBe(false);
    })
    test("Returns true for part of last word in string", () => {
        let result = confirmEnding("I end with a long word like gregarious", "arious");
        expect(result).toBe(true);
    })
    test("Returns false for part of last word not in string", () => {
        let result = confirmEnding("I end with a long word like gregarious", "gregar");
        expect(result).toBe(false);
    })
    test("Returns true for ending with space in string", () => {
        let result = confirmEnding("Never in my life have I been so offended", "so offended");
        expect(result).toBe(true);
    })
    test("Returns false for ending with space not in string", () => {
        let result = confirmEnding("Never in my life have I been so offended", "so ffended");
        expect(result).toBe(false);
    })
    test("Returns correct Boolean when target is ending in reverse order", () => {
        let result = confirmEnding("Everything is topsy turvy", "yvrut");
        expect(result).toBe(false);
    })
    test("Returns correct answer when target string is the beginning", () => {
        let result = confirmEnding("Everything is topsy turvy", "Everything");
        expect(result).toBe(false);
    })

})