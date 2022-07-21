
let persona1 = parseInt(prompt("Ingrese la edad de persona 1:"))
let persona2 = parseInt(prompt("Ingrese la edad de persona 2:"))
let persona3 = parseInt(prompt("Ingrese la edad de persona 3:"))
let persona4 = parseInt(prompt("Ingrese la edad de persona 4:"))



function CalcularPromedioEdad (persona1,persona2,persona3,persona4){
    const promedio = (persona1 + persona2 + persona3 + persona4 ) / 4
    return promedio
}

alert( " la edad promedio es : " + CalcularPromedioEdad(persona1,persona2,persona3,persona4))