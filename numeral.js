class Numeral {
    convertToRoman(integer) {
        if(integer<=3) {
            return "I".repeat(integer)
        }
    }
}

module.exports = Numeral;