class Numeral {
    convertToRoman(integer) {
        if(integer===1) return 'I';
        if(integer===2) return 'II';
        if(integer===3) return 'III';
    }
}

module.exports = Numeral;