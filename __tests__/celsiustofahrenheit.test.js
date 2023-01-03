"use strict";
const {convertCtoF} = require("./../scripts/celsiustofahrenheit");

describe("convertCtoF", () => {
    test("converts Celsius to Fahrenheit", () => {
        let result = convertCtoF(20);
        expect(result).toBe(68);
    })
    test("converts 0 Celsius to Fahrenheit", () => {
        let result = convertCtoF(0);
        expect(result).toBe(32);
    })
    test("converts negative Celsius to Fahrenheit", () => {
        let result = convertCtoF(-20);
        expect(result).toBe(-4);
    })

    test("converts decimal Celsius to Fahrenheit", () => {
        let result = convertCtoF(40.6);
        expect(result).toBe(105);
    })

} ) 