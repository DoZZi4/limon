const Router = require('./API/router')
const express = require("express");
const dig = require('./core/dig')
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
        app.use(Router);
    
    app.listen(7070)
    dig()
