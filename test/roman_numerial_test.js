const assert = require("assert");
const Numeral = require("../numeral");

describe("Convert interger to roman numerals", () => {

    const numeral = new Numeral();

    it("converts 1 to I", () => {
        assert.strictEqual(numeral.convertToRoman(1), 'I');
    })

    it("converts 2 to II", () => {
        assert.strictEqual(numeral.convertToRoman(2), 'II');
    })
})