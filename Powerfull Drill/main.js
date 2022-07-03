const express = require("express");
const saveData = require('./DB/saveData')
saveData('drill','epic drill')
    const app = express()
    app.get("/",function(req,res){
        res.send("hello broyk")
    })
    app.get("/date", function(req,res){
        res.send(new Date())
    })
    app.get("/info", function(req,res){
        res.send(JSON.stringify({user: "Jhon",
            email: "test@mail.ru"}))
    })
        app.get("/hello/:name" ,function(req,res){
            let name = req.params.name
            res.send(`hello ${name}`)
        } )
    
    app.listen(7070)