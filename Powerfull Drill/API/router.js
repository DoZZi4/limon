import express  from 'express'
import {dig}  from'../core/dig.js'
import {getData}  from'../DB/getData.js'
const Router = express.Router()
Router.get("/stats", function(req,res){
    let rout = getData()
    delete rout.lastExhaust
        res.send(rout)
    
})
Router.get("/dig", function(req,res){
    dig()
    let deep = getData('deep')
    let energy = getData('energy')
    res.send({deep:deep,energy:energy}).status(200)
})

export { Router }
