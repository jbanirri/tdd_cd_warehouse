class Numeral {
    convertToRoman(integer) {
        let result = '';
        let decrease = 1;
        while(integer > 0) {
            let numeralVal = 'I';
            decrease = 1

            if(integer === 4) {
                decrease = integer;
                numeralVal = 'IV';
            }
            else if(integer >= 5) {
                decrease = 5;
                numeralVal = 'V';
            }

            result = result.concat(numeralVal);
            integer -= decrease;
        }

        return result;
    }
}

module.exports = Numeral;