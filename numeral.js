class Numeral {
    convertToRoman(integer) {
        let levels = [
            // { val: 1000, str: "M" },
            // { val: 500, str: "D" },
            // { val: 100, str: "C" },
            // { val: 50, str: "L" },
            // { val: 10, str: "X" },
            // { val: 5, str: "V" },
            { val: 1, str: "I" },
            { val: 0, str: "" }
        ];
        let result = '';

        for(let i = 0; i < levels.length-1; i++) {
            let val = levels[i].val
            let str = levels[i].str
            while(integer >= val) {
                result = result.concat(str);

                integer -= val;
            }
        }

        return result;
    }
}

module.exports = Numeral;