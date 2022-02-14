const assert = require("assert");
const CD = require("../cd");

describe("Buy CD - Payment accepted", () => {

    const payments = { accepted : function(creditCard) {
        this.creditCard = creditCard;
        return true;
    }};
    const shipping = {
        generateNotes : function(shippingNote) {
            this.shippingNote = shippingNote
        }
    };
    const cd = new CD(payments, shipping, 3, "The Beatles", "Help!");
    const customer = {
        name: "PJ Sinohin",
        address: "Los Banos",
        creditCard: "1323947238414",
        purchaseList: []
    };
    cd.buy(2, customer);

    it("deducts sale from CD stock", () => {
        assert.strictEqual(1,cd.getStock()); 
    })

    it("uses customer's credit card", () => {
        assert.strictEqual(customer.creditCard,payments.creditCard);
    })

    it("creates a shipping note", () => {
        assert.deepStrictEqual({
            artist: "The Beatles",
            title: "Help!",
            quantity: 2,
            customer_name: "PJ Sinohin",
            delivery_address: "Los Banos"
        }, cd.shipping.shippingNote);
    })
})