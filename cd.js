class CD {
    constructor(payments, shipping, stock, artist, title) {
        this.payments = payments;
        this.shipping = shipping;
        this.stock = stock;
        this.artist = artist;
        this.title = title;
    }

    buy(quantity, customer) {
        let paymentResult = this.payments.accepted(customer.creditCard);

        if(!paymentResult) return;

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

        // Update customer purchase list
        let item = {
            title: this.title,
            artist: this.artist,
            quantity: quantity
        }
        customer.purchaseList.push(item)
    }
}

module.exports = CD;