"use strict";
const {repeatStringNumTimes} = require("./../scripts/repeatstringnumtimes");

describe("repeatStringNumTimes", () => {
    test("Repeat a string a given number of times", () => {
        let result = repeatStringNumTimes("hello", 5);
        expect(result).toBe("hellohellohellohellohello");
    })
    test("Returns an empty string if second argument is not a positive integer", () => {
        let result = repeatStringNumTimes("An amazing disappearing act", -4);
        expect(result).toBe("");
    })
    test("Returns an empty string if second argument is not a positive integer", () => {
        let result = repeatStringNumTimes("An amazing disappearing act", 0);
        expect(result).toBe("");
    })
    test("Repeats a large number of times", () => {
        let result = repeatStringNumTimes("ha", 30);
        expect(result).toBe("hahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
    })
    test("Returns symbols correctly", () => {
        let result = repeatStringNumTimes("$", 10);
        expect(result).toBe("$$$$$$$$$$");
    })
})