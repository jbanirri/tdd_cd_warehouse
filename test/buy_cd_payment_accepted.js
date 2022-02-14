const assert = require("assert");
const CD = require("../cd");

describe("Buy CD - Payment accepted", () => {

    const payments = { accepted : function(creditCard) {
        this.creditCard = creditCard;
        return true;
    }}    
    const cd = new CD(payments, 3);
    const creditCard = "1323947238414";
    cd.buy(2, creditCard);

    it("deducts sale from CD stock", () => {
        assert.strictEqual(1,cd.getStock());
    })

    it("uses customer's credit card", () => {
        assert.strictEqual(creditCard,payments.creditCard);
    })
})