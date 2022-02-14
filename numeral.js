class Numeral {
    convertToRoman(integer) {
        let result = '';
        let decrease = 1;
        while(integer > 0) {
            let numeralVal = 'I';
            decrease = 1

            if(integer >= 900) {
                decrease = 900;
                numeralVal = 'DM';
            }
            else if(integer >= 500) {
                decrease = 500;
                numeralVal = 'D';
            }
            else if(integer >= 400) {
                decrease = 400;
                numeralVal = 'CD';
            }
            else if(integer >= 100) {
                decrease = 100;
                numeralVal = 'C';
            }
            else if(integer >= 90) {
                decrease = 90;
                numeralVal = 'XC';
            }
            else if(integer >= 50) {
                decrease = 50;
                numeralVal = 'L';
            }
            else if(integer >= 40) {
                decrease = 40;
                numeralVal = 'XL';
            }
            else if(integer >= 10) {
                decrease = 10;
                numeralVal = 'X';
            }
            else if(integer === 9) {
                decrease = integer;
                numeralVal = 'IX';
            }
            else if(integer >= 5) {
                decrease = 5;
                numeralVal = 'V';
            }
            else if(integer === 4) {
                decrease = integer;
                numeralVal = 'IV';
            }

            result = result.concat(numeralVal);
            integer -= decrease;
        }

        return result;
    }
}

module.exports = Numeral;