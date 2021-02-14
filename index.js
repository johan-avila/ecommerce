const express = require("express")
const config = require("./config")
const router = require("./routes")

const app = express()

// Middlewares
router(app) //All Routes 

app.listen(config.server.port, ()=>{
    console.log(`Listen on ${config.server.port}`);
})