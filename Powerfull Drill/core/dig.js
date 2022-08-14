const getData = require('../DB/getData')
const saveData = require('../DB/saveData')
const exhaust = require('./exhaust')


function dig(){
    let deep = getData('deep')
    deep+=15
    saveData('deep',deep)
    exhaust()
}
module.exports = dig
