const numero1 = parseInt(prompt("Ingresa un número"))
const numero2 = parseInt(prompt("ingresa otro número"))
const operacion = prompt("¿Que operación quiere hacer? sum-rest-mult-div")
let resultado
if (operacion == "sum") {
    resultado = numero1+numero2
}
else if (operacion == "rest") {
    resultado = numero1-numero2
}
else if (operacion == "mult"){
    resultado = numero1*numero2
}
else {
    resultado = numero1/numero2}
alert ("el resultado es"  + resultado)