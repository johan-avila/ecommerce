require("dotenv").config()
module.exports = {
    server: {
        port: process.env.PORT || 4500
    },
    mongoDB: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017/myEcommerce",
        databaseName: process.env.MONGO_DATABASE || "myEcommerce"
    }
}