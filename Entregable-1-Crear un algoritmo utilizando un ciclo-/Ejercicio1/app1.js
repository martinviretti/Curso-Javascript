// Ejemplos de algoritmo utilizando ciclos 


// Ejemplo 1
// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.


  let numero = Number(prompt("Ingrese un numero : "))

 for( let i = 0; i < 5 ; i++){

 if(isNaN(numero)){
    numero = Number(prompt(" No ingreso un numero , por favor ingrese un numero : "))
 }else{
    numero += i + 1
    alert(numero)
 }
  
 }





  