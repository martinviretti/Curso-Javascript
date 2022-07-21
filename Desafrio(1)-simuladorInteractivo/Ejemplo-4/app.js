

// let TunrosDeHoy = prompt("Ingrese Los turnos de hoy :\n" +" para finalizar, ponga 0")
// let cantidadDeTurnos = 0




// while(TunrosDeHoy != 0 ){
//     if(TunrosDeHoy == " " ){
//         alert("ingreso no valido")
//         TunrosDeHoy = prompt("Ingrese Los turnos de hoy :\n" +" para finalizar, ponga 0")
//     }else{
//         cantidadDeTurnos += 1
//         TunrosDeHoy = prompt("Su turno fue ingresado ,\nIngrese otro turno o ponga 0 para finalizar :")
//     }

// }

// let esperaPorTurnos = 10

// function CalcularPromedioDeEspera (cantidadDeTurnos,esperaPorTurnos){
//  let promedioDeEspera = cantidadDeTurnos * esperaPorTurnos
//  return promedioDeEspera
// }

// alert( "El tiempo aproximado de espera es : " + " " +CalcularPromedioDeEspera(cantidadDeTurnos,esperaPorTurnos) + " " + "Minutos")

let TunrosDeHoy = parseInt(prompt("Ingrese Los turnos de hoy :\n" +" para finalizar, ponga 0"))
let cantidadDeTurnos = 0




while(TunrosDeHoy != 0 ){
    if( isNaN(TunrosDeHoy) ){
        alert("ingreso no valido")
        TunrosDeHoy = parseInt(prompt("Ingrese Los turnos de hoy :\n" +" para finalizar, ponga 0"))
    }else{
        cantidadDeTurnos += 1
        TunrosDeHoy = parseInt(prompt("Su turno fue ingresado ,\nIngrese otro turno o ponga 0 para finalizar :"))
    }

}

console.log(cantidadDeTurnos)

let esperaPorTurnos = 10

function CalcularPromedioDeEspera (cantidadDeTurnos,esperaPorTurnos){
 let promedioDeEspera = cantidadDeTurnos * esperaPorTurnos
 return promedioDeEspera
}

alert( "El tiempo aproximado de espera es : " + " " +CalcularPromedioDeEspera(cantidadDeTurnos,esperaPorTurnos) + " " + "Minutos")

    programa


    //   ingresar turnos y sabiendo que entre cada tunrno demora 10 minutos , calcular cuantos seria la demora aproximada que tiene para su turno de " x" hora