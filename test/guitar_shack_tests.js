const assert = require("assert");
var XMLHttpRequest = require('xhr2');

class Product{
    constructor(productId, stock) {
        this.productId = productId;
        this.stock = stock;
    }
}

class StockMonitor{
    constructor(alert, warehouse, restockLevel) {
        this.alert = alert;
        this.warehouse = warehouse;
        this.restockLevel = restockLevel;
    }

    handleSale(productId, quantity) {
        let product = this.warehouse.getProduct(productId)
        let stockAfterSale = product.stock - quantity;
        let calculatedRestockLevel = this.restockLevel.calculate(product);

        if(stockAfterSale <= calculatedRestockLevel)
            this.alert.send(`Please order more of product ${productId}`);
    }
}

class Warehouse{
    getProduct(productId) {
        return {
            "id": 811,
            "make": "Epiphone",
            "range": "Les Paul",
            "model": "Les Paul Classic",
            "description": "Epiphone Les Paul Classic In Worn Heritage Cherry Sunburst",
            "price": 399,
            "stock": 27,
            "rackspace": 30,
            "leadTime": 14,
            "minOrder": 20
        }
    }
}

class RestockLevel{
    constructor(salesHistory) {
        this.salesHistory = salesHistory;
    }
    
    calculate(product) {
        // Get total sales in last 30 days
        // 7-13-2019 to 8-12-2019
        let sales30Days = this.salesHistory.total(product, '7-13-2019', '8-12-2019')
        let dailyAverage = sales30Days/30;

        return Math.floor(dailyAverage * product.leadTime);
    }
}

class SalesHistory{
    total(product, startDate, endDate) {
        return 28
    }
}

class Alert {
    send(message) {
        this.message = message;
    }
}

describe("Stock monitor handles sale (complete)", () => {
    it("product is sold and restock is NOT needed", () => {
        const alert = new Alert();
        const warehouse = new Warehouse();
        const salesHistory = new SalesHistory();
        const restockLevel = new RestockLevel(salesHistory);

        const stockMonitor = new StockMonitor(alert, warehouse, restockLevel);

        const product = warehouse.getProduct(811);

        stockMonitor.handleSale(product, 3);

        assert.strictEqual(alert.message,undefined);
    })
})

describe("Stock monitor handles sale", () => {
    it("product is sold and restock is needed", () => {
        const alert = {
            send: function(message) {
                this.message = message;
            }
        };

        const product = new Product(811, 25);

        const warehouse = { getProduct: () => product };

        const restockLevel = {
            calculate: () => 24
        }

        const stockMonitor = new StockMonitor(alert,warehouse, restockLevel);

        stockMonitor.handleSale(811,1);

        assert.strictEqual(alert.message,"Please order more of product 811");
    })

    it("product is sold and restock is NOT needed", () => {
        const alert = {
            send: function(message) {
                this.message = message;
            }
        };

        const product = new Product(811, 26);

        const warehouse = { getProduct: () => product };

        const restockLevel = {
            calculate: () => 24
        }

        const stockMonitor = new StockMonitor(alert,warehouse, restockLevel);

        stockMonitor.handleSale(811,1);

        assert.strictEqual(alert.message,undefined);
    })
})

describe("Warehouse", () => {
    const productInfo = {
        "id": 811,
        "make": "Epiphone",
        "range": "Les Paul",
        "model": "Les Paul Classic",
        "description": "Epiphone Les Paul Classic In Worn Heritage Cherry Sunburst",
        "price": 399,
        "stock": 27,
        "rackspace": 30,
        "leadTime": 14,
        "minOrder": 20
    };

    const warehouse = new Warehouse();

    it("retrives product info given product id", () => {
        assert.deepStrictEqual(warehouse.getProduct(811),productInfo);
    })
})



describe("Restock level", () => {
    it("calculate restock level of the product", () => {
        const warehouse = new Warehouse();

        const product = warehouse.getProduct();

        const salesHistory = {
            total: (product, startDate, endDate) => 28
        }

        const restockLevel = new RestockLevel(salesHistory);

        assert.strictEqual(restockLevel.calculate(product),13);
    })
})