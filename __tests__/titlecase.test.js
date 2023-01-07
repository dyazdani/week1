"use strict";
const {titleCase} = require("./../scripts/titlecase");

describe("titleCase", () => {
    test("returns the string with the first letter of all the words capitalized", () => {
        let result = titleCase("this is a sentence for you");
        expect(result).toBe("This Is A Sentence For You");
    })
    test("returns with words with only the first letter capitalized", () => {
        let result = titleCase("wEirD cApiTaliZeD wOrDs");
        expect(result).toBe("Weird Capitalized Words");
    })
    test("returns with words with only the first letter capitalized", () => {
        let result = titleCase("I AM TALKING VERY LOUDLY");
        expect(result).toBe("I Am Talking Very Loudly");
    })
})