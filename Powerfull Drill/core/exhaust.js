import {getData}  from'../DB/getData.js'
import {saveData}  from'../DB/saveData.js'
import {timeToRelax}  from'../const.js'
function exhaust(){
    let Data = getData()
    // energy-=15
    // saveData('energy',energy)
    let currentTime = Date.now()
    let lastExhaust = Data.lastExhaust
    currentTime-=lastExhaust
    console.log(currentTime)
    if (currentTime>timeToRelax) {
        Data.energy = 100

    }else if(Data.energy>15){
        Data.energy -=15
    }
    Data.lastExhaust = Date.now()
    saveData('lastExhaust', Data.lastExhaust)
    saveData('energy', Data.energy)
}
export  {exhaust}
