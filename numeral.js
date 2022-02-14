class Numeral {
    convertToRoman(integer) {
        let result = '';
        while(integer > 0) {
            result = result.concat('I');
            integer -= 1;
        }

        return result;
    }
}

module.exports = Numeral;