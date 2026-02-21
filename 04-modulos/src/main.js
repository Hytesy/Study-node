const product = require("./services/products")
const config = require("./services/config")
const database = require("./services/database")

async function main() {
    console.log("Hi");

    product.getFullName("300", "HyperX")
    product.getProductLabel("Dayum")

    console.log(config.devArea.version);
    console.log(config.client.device);
    
    database.connectToDatabase
    
}

main()