const express = require("express");
const {dataPath} = require("./DB/getData.js")
console.log(dataPath)
// let HTTP = require("http");
// let requestListener = function(req,res){
    
//     if (req.url==="/"){
//         res.writeHead(200)
//         res.end("Если ты это читаешь ты красавчик")
//     }

//     if (req.url==="/date"){
//         res.writeHead(200)
//         res.end(new Date())
//     }

//     if(req.url==="/info"){
//         res.writeHead(200)
//         res.end(JSON.stringify({user: "Jhon",
//         email: "test@mail.ru"}))
//     }
// }   
//     let server = HTTP.createServer(requestListener)
//     server.listen(5000)
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