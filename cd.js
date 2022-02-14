class CD {
    constructor(payments, shipping, stock, artist, title) {
        this.payments = payments;
        this.shipping = shipping;
        this.stock = stock;
        this.artist = artist;
        this.title = title;
    }

    buy(quantity, customer) {
        this.payments.accepted(customer.creditCard);
        this.stock -= quantity;

        // generate shipping notes
        let shippingNote = {
            artist: this.artist,
            title: this.title,
            quantity: quantity,
            customer_name: customer.name,
            delivery_address: customer.address
        }
        this.shipping.generateNotes(shippingNote);
    }

    getStock() {
        return this.stock; 
    }
}

module.exports = CD;