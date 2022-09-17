let clicker = document.querySelector('#clicker');
let blocks = document.querySelector('#blocks')
let energy = document.querySelector('#energy')
    clicker.addEventListener('click' , function(a){
        a.preventDefault()
        fetch("http://localhost:7070/dig")
        .then(function(result){
            return result.json()
            console.log(result)
        })
        .then(function(result){
            console.log(result)
            blocks.textContent = `${result.deep}blocks`
            energy.textContent = `${result.energy}Energy`
        })
        .catch(function(result){
            console.log(result)
        })
    })


