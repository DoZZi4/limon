const getData = require('../DB/getData')
const saveData = require('../DB/saveData')
const {timeToRelax} = require('../const')
function exhaust(){
    let Data = getData()
    // energy-=15
    // saveData('energy',energy)
    let currentTime = Date.now()
    let lastExhaust = Data.lastExhaust
    currentTime-=lastExhaust
    if (currentTime>timeToRelax) {
        Data.energy = 100

    }else{
        Data.energy -=15
    }
    Data.lastExhaust = Date.now()
    saveData('lastExhaust', Data.lastExhaust)
    saveData('energy', Data.energy)
}
module.exports = exhaust
