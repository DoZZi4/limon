import fetch from "node-fetch";
fetch("http://localhost:7070/dig")
.then(function(result){
    return result.json()
    // console.log(result)
})
.then(function(result){
    console.log(result)
})
.catch(function(result){
    console.log(result)
})