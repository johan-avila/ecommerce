const productsRoutes = require("./products")
function router(app) {
    productsRoutes(app)
}

module.exports = router