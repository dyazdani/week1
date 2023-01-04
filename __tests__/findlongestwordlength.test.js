"use strict";
const {findLongestWordLength} = require("./../scripts/findlongestwordlength");

describe("findLongestWordLength", () => {
    test("returns length of longest word in a sentence", () => {
        let result = findLongestWordLength("I had an absolutely splendid day");
        expect(result).toBe(10);
    })
    test("returns a number", () => {
        let result = findLongestWordLength("I would not like that");
        expect(result).toBe(5);
    })
    test("returns correct length when two or more words are tied for the longest", () => {
        let result = findLongestWordLength("You have a dull mind");
        expect(result).toBe(4);
    })
    test("returns length when all words have the same length", () => {
        let result = findLongestWordLength("Fix his cap");
        expect(result).toBe(3);
    })
    test("The returned length should include both upper and lower case letters", () => {
        let result = findLongestWordLength("Werewolves are hungriest at midnight");
        expect(result).toBe(10);
    })
})