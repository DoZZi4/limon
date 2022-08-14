const fs = require ('fs');
const path = require('path');
const dataPath = path.join(__dirname,"data.json")

const getData = (key)=>{
    const data = fs.readFileSync(dataPath, {encoding:'utf8'});
    const parseData = JSON.parse(data)
    if (key){
        return parseData[key]
    }
    return parseData;
}
module.exports= getData

function sum(a,b){
    return a + b
}
sum(10,40)
console.log(sum(10,40))