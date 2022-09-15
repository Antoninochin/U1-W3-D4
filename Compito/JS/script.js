let stringa = 'Ciao Mondo'
console.log(stringa)
let stringaMaiuscola = stringa.toUpperCase()
console.log(stringaMaiuscola)
let stringaMinuscola = stringa.toLowerCase()
console.log(stringaMinuscola)
let persone = [
    'Giulio',
    'Marco',
    'Luca',
    'Fabio'
]
let useSplit = stringa.split("", 10)
console.log(useSplit)
let useSplit2 = stringa.split('C')
console.log(useSplit2)
//aggiungere con .concat valori provenienti da altri array
let add = ['Piero', 'Franco', 'Jonathan']

persone = persone.concat(add)

//aggiungere con .push valori nell'array
persone.push('tizio','Caio')

//togliere ultimo elemento .pop
persone.pop()

//metodo shift ( toglie il primo elemento )
persone.shift()

//metodo aggiungere all'inizio nuovi elementi con unshift
persone.unshift('Fabiano', 'sempronio')


console.log(persone)

document.write( persone [2])

console.log( persone [2])
console.log( persone [3])
console.log( persone [1])
console.log( persone [0])


/*function clickHere(){
    let random = getRandomInteger(0, persone.length - 1)
    
    let personeRandom = persone[random]

    document.getElementById('display').write = personeRandom
}

function getRandomInteger(min, max) {
    return Math.round(Marth.random() * (min, max) + min);
}*/