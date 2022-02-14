class CD {
    constructor(payments, shipping, stock, artist, title) {
        this.payments = payments;
        this.shipping = shipping;
        this.stock = stock;
        this.artist = artist;
        this.title = title;
    }

    buy(quantity, customerInfo) {
        this.payments.accepted(customerInfo.creditCard);
        this.stock -= quantity;

        // generate shipping notes
        let shippingNote = {
            artist: this.artist,
            title: this.title,
            quantity: quantity,
            customer_name: customerInfo.name,
            delivery_address: customerInfo.address
        }
        this.shipping.generateNotes(shippingNote);
    }

    getStock() {
        return this.stock; 
    }
}

module.exports = CD;