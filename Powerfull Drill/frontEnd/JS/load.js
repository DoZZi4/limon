import {chest} from './event.js'
import {showChest,showMonster} from './event.js'
window.addEventListener('load',function(){
    let blockis = document.querySelector('#blocks')
let energis = document.querySelector('#energy')
fetch("http://localhost:7070/dig")
.then(function(result){
    return result.json()
})
.then(function(result){
    console.log(result)
    blocks.textContent = `${result.deep}blockis`
    energy.textContent = `${result.energy}Energis`
})
.catch(function(result){
    console.log(result)
})
// chest('darova Lblsii')
// showChest('#picture2')
showMonster('#monster')

})