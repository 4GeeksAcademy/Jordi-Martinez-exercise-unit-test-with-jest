// Importar la función sum del archivo app.js
const { 
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
 } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    let dollars = fromEuroToDollar(3.5);
    let expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test('4 dollars should be 669.82 yens', function(){
    let yens = fromDollarToYen(4)
    let expected = 4/156.5*0.87
    expect(fromDollarToYen(4)).toBe(669.82)
})
test("600 yens should be 3.3354632587859427 pounds", function(){
    let pounds = fromYenToPound(600)
    let expected =600/156.5*0.87
    expect(fromYenToPound(600)).toBe(3.3354632587859427);
})