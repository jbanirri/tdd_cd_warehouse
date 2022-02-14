class Numeral {
    convertToRoman(integer) {
        let result = '';
        let decrease = 1;
        while(integer > 0) {
            let numeralVal = 'I';

            result = result.concat(numeralVal);
            integer -= decrease;
        }

        return result;
    }
}

module.exports = Numeral;