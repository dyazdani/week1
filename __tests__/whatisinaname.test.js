"use strict";
const {whatIsInAName} = require("./../scripts/whatisinaname");

describe("whatIsInAName", () => {
    test("returns array of objects in collection that contain source key-value pair", () => {
        let result = whatIsInAName([{a: 1, b: 2, c: 3}, {b: 2, d: 4}, {c: 3, e: 5}], {b: 2});
        expect(result).toStrictEqual([{a: 1, b: 2, c: 3}, {b: 2, d: 4}]);
    })
    test("works with string values", () => {
        let result = whatIsInAName([{band: "Red Hot Chili Peppers", album: "Scar Tissue"}, {band: "Red Hot Chili Peppers", album: "By The Way"}, {band: "The Beatles", album: "Revolver"}, {band: "Red Hot Chili Peppers", album: "Blood, Sugar, Sex, Magik"}], {band: "Red Hot Chili Peppers"});
        expect(result).toStrictEqual([{band: "Red Hot Chili Peppers", album: "Scar Tissue"}, {band: "Red Hot Chili Peppers", album: "By The Way"}, {band: "Red Hot Chili Peppers", album: "Blood, Sugar, Sex, Magik"}]);
    })
    test("works with null", () => {
        let result = whatIsInAName([{a: 1, b: null, c: 3}, {b: 2, d: 4}, {c: 3, e: 5}], {b: null});
        expect(result).toStrictEqual([{a: 1, b: null, c: 3}]);
    })
    test("works with zero", () => {
        let result = whatIsInAName([{a: 1, b: 0, c: 3}, {b: 0, d: 4}, {c: 3, e: 5}], {b: 0});
        expect(result).toStrictEqual([{a: 1, b: 0, c: 3}, {b: 0, d: 4}]);
    })
    test("should return [] when there is no match", () => {
        let result = whatIsInAName([{band: "Red Hot Chili Peppers", album: "Scar Tissue"}, {band: "Red Hot Chili Peppers", album: "By The Way"}, {band: "The Beatles", album: "Revolver"}, {band: "Red Hot Chili Peppers", album: "Blood, Sugar, Sex, Magik"}], {band: "Backstreet Boys"});
        expect(result).toStrictEqual([]);

    })
    test("should return only objects that contain all key-value pairs in source argument", () => {
        let result = whatIsInAName([{a: 1, b: 0, c: 3}, {b: 0, d: 4}, {c: 3, e: 5}], {b: 0, c: 3});
        expect(result).toStrictEqual([{a: 1, b: 0, c: 3}]);
    })
    test("fcc test", () => {
        let result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
        expect(result).toStrictEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
})
test("test with 3 keys in source argument", () => {
    let result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2, "cookie": 2});
    expect(result).toStrictEqual([{ "apple": 1, "bat": 2, "cookie": 2 }]);
})

})