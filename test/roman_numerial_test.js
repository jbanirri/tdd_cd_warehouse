const assert = require("assert");
const Numeral = require("../numeral");

describe("Convert interger to roman numerals", () => {

    const num = new Numeral();

    [
        { integer: 1, numeral: "I"},
        { integer: 2, numeral: "II"},
        { integer: 3, numeral: "III"},
        { integer: 4, numeral: "IV"},
        { integer: 5, numeral: "V"},
        { integer: 6, numeral: "VI"},
        { integer: 7, numeral: "VII"},
        { integer: 8, numeral: "VIII"},
        { integer: 9, numeral: "IX"},
        { integer: 10, numeral: "X"},
        { integer: 11, numeral: "XI"},
        { integer: 14, numeral: "XIV"},
        { integer: 19, numeral: "XIX"},
        { integer: 20, numeral: "XX"},
        { integer: 39, numeral: "XXXIX"}
    ].forEach(({integer,numeral}) => {
        it(`converts ${integer} to ${numeral}`, () => {
            assert.strictEqual(num.convertToRoman(integer), numeral);
        })
    })
    
})