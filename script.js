const combinaisonCorrecte = ['pink', 'orange', 'red', 'blue']
const choixPossible =  ['pink', 'orange', 'yellow', 'red', 'blue', 'grey']
let essais = 0 

function proposition(color1, color2, color3, color4){
    essais +=1
    if(combinaisonCorrecte[0] === color1 && combinaisonCorrecte[1] === color2 && combinaisonCorrecte[2] === color3 && combinaisonCorrecte[3] === color4){
    console.log("La proposition correspond à la combinaison correcte")
    }else{
    console.log("La proposition ne correspond pas à la combinaison correcte")
    }
    return 
}

proposition('pink', 'orange', 'red', 'blue')
proposition('pink', 'yellow', 'red', 'blue')
proposition('pink', 'yellow', 'orange', 'blue')
proposition('green', 'yellow', 'red', 'blue')
proposition('pink', 'orange', 'red', 'blue')
proposition('pink', 'yellow', 'red', 'grey')
proposition('pink', 'violet', 'red', 'blue')
proposition('pink', 'yellow', 'white', 'blue')
proposition('pink', 'yellow', 'burgundy', 'blue')
proposition('pink', 'black', 'red', 'blue')
proposition('pink', 'orange', 'red', 'blue')
proposition('pink', 'blue', 'red', 'blue')
proposition('pink', 'grey', 'red', 'blue')
proposition('pink', 'orange', 'red', 'blue')
proposition('pink', 'blue', 'red', 'blue')
proposition('pink', 'grey', 'red', 'blue')

function finishOrContinue(){
    if(essais<=12){
    // proposition()
    console.log(`Il vous reste ${12-essais} tentatives`)
    }else if(essais>12){
    console.log("Vous avez atteint le nombre d'essais maximum")
    }
    console.log("nb d'essais :", essais)
    return
    }
    finishOrContinue()

// function finishOrContinue(){
// if(essais<=12){
// // proposition()
// console.log("test")
// }else if(essais>12){
// console.log("Vous avez atteint le nombre d'essais maximum")
// }
// console.log("nb d'essais :", essais)
// return
// }
// finishOrContinue()
// function (){
// }