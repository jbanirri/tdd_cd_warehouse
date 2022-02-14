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

    it("converts 3 to III", () => {
        assert.strictEqual(numeral.convertToRoman(3), 'III');
    })

    it("converts 4 to IV", () => {
        assert.strictEqual(numeral.convertToRoman(4), 'IV');
    })
})