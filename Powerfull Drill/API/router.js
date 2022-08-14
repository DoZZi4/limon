const express = require ('express')
const dig = require('../core/dig')
const getData = require('../DB/getData')
const Router = express.Router()
Router.get("/stats", function(req,res){
    let rout = getData()
    delete rout.lastExhaust
        res.send(rout)
    
})
Router.get("/dig", function(req,res){
    res.send(`hello`)
})

module.exports = Router
