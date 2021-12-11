const primero=[
'Este año'
,'Dentro de un año'
,'Dentro de dos años'
,'Dentro de tres años'
]
const segundo=[
'te irás de viaje'
,'te irás a trabajar'
,'huirás de tu pais'
,'te irás a comer'
]
const tercero=[
 'en avión'
, 'en barco'
, 'en bici'
, 'en trén'
]

function Test(){
    //console.log('Hello world!');
}
//Test();

function MixedMessage()
{
    let ind1=Math.floor(Math.random()*primero.length)
    let ind2=Math.floor(Math.random()*segundo.length)
    let ind3=Math.floor(Math.random()*tercero.length)

     console.log(primero[ind1] +' ' +segundo[ind2]+' ' +tercero[ind3]+ '.')

}

MixedMessage()