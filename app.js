

 function fromEuroToDollar(euro) {
     let yourDollar = 0
     yourDollar = euro*1.07
     return yourDollar    
}
function fromDollarToYen(dollar) {
    let yourYens = 0
    yourYens = fromEuroToDollar(dollar)*156.5
    return yourYens
}
function fromYenToPound(yen) {
    let yourPounds = 0
    yourPounds = yen/156.5*0.87
    return yourPounds    
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}