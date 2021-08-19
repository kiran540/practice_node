var express = require("express")
var app = express()

app.get("/home",(req,res)=>{
    res.send({
        message:"welcome to home page"
    })
})

app.listen(3000 || process.env.port,()=>{
    console.log("app started successfully")
})