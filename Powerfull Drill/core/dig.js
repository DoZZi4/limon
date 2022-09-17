import {getData} from'../DB/getData.js'
import {saveData} from'../DB/saveData.js'
import {exhaust} from'./exhaust.js'


function dig(){
    let energy = getData('energy')
    if (energy<15){
        exhaust()
        return
    };
    let deep = getData('deep')
    deep+=getDrillPower()
    saveData('deep',deep)
    exhaust()
}
function getDrillPower(){
    let drill = getData('drill')
    if (drill==='Default drill'){
        return 1
    }
    if (drill==='Elite drill'){
        return 2
    }
    if (drill==='Special drill'){
        return 4
    }
    if (drill==='Epic drill'){
        return 6
    }
    if (drill==='Mega drill'){
        return 8
    }
    if (drill==='Rainbow drill'){
        return 10
    }
}
export  {dig}
