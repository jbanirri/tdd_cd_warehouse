class CD {
    constructor(payments, shipping, stock, artist, title) {
        this.payments = payments;
        this.shipping = shipping;
        this.stock = stock;
        this.artist = artist;
        this.title = title;
    }

    buy(quantity, creditCard, customerInfo) {
        this.payments.accepted(creditCard);
        this.stock -= quantity;

        // generate shipping notes
        this.shipping.generateNotes(this.artist, this.title, quantity, customerInfo.name, customerInfo.address);
    }

    getStock() {
        return this.stock; 
    }
}

module.exports = CD;