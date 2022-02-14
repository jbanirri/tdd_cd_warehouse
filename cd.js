class CD {
    constructor(payments, stock) {
        this.payments = payments;
        this.stock = stock;
    }

    buy(quantity, creditCard) {
        this.payments.accepted(creditCard);
        this.stock -= quantity;
    }

    getStock() {
        return this.stock; 
    }
}

module.exports = CD;