const express = require("express")

function productsRoutes(app){
    const router = express.Router()
    app.use("/api/products", router);
    
    router.get("/", (req, res, next) => {
        const { rewards, toys, straps  } = req.query
        res.send("Estamos en GET /api/products")    
    })
    router.get("/:productId", (req, res, next)=> {
        const { productId } = req.params    
        res.send("Estamos en GET /api/products/:id")    
        
    })
    router.post("/",/* AUTH */ (req, res, next)=> {
        // const { product } = req.body    
        res.send("Estamos en POST /api/products/")    
    })
    router.put("/:productId", /* AUTH */ (req, res, next)=> {
        const { productId } = req.params    
        // const { product } = req.body    
        res.send("Estamos en PUT /api/products/")    
        
    })
    router.delete("/:productId", /* AUTH */ (req, res, next)=> {
        const { productId } = req.params    
        res.send("Estamos en DELETE /api/products/")    
    })
}

module.exports = productsRoutes