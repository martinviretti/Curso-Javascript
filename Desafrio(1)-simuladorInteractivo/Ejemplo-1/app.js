let Producto1 = parseInt(prompt(" Ingrese el precio del producto 1 :"))
let Producto2 = parseInt(prompt(" Ingrese el precio del producto 2 :"))
let Producto3 = parseInt(prompt(" Ingrese el precio del producto 3 :"))
let Producto4 = parseInt(prompt(" Ingrese el precio del producto 4 :"))


while(isNaN(Producto1 ) || isNaN(Producto2 ) || isNaN(Producto3 ) || isNaN(Producto4 )  || "") {
    alert("Error alguno de los ingresos no fue valido , por favor ingrese nuevamente")
     Producto1 = parseInt(prompt(" Ingrese el precio del producto 1 :"))
     Producto2 = parseInt(prompt(" Ingrese el precio del producto 2 :"))
     Producto3 = parseInt(prompt(" Ingrese el precio del producto 3 :"))
     Producto4 = parseInt(prompt(" Ingrese el precio del producto 4 :"))

}


let MontoDeterminado = Producto1 + Producto2 + Producto3 + Producto4




let CantidadDeCuotas = parseInt(prompt("Cantidad de cuotas :"))

while(isNaN(CantidadDeCuotas) || CantidadDeCuotas <= 0 || CantidadDeCuotas == ""){
    CantidadDeCuotas = ParseInt(prompt(" No ingreso una cantidad de cuotas valida, Ingrse nuevamente:"))
}



function CalcularCuotas (MontoDeterminado,CantidadDeCuotas){
    if (CantidadDeCuotas > 0 && CantidadDeCuotas<= 5)
    {
       let total = ( "El total de su compra es"  + " " + "$" + MontoDeterminado  + " " + "Su cuota tiene un 25% de interes y  el monto es :" + " " +   "$" +  ( (MontoDeterminado / CantidadDeCuotas) * 1.25))
       return total
    }
    else if(CantidadDeCuotas > 5 && CantidadDeCuotas < 12)
    {
       let total = ( "El total de su compra es"  + " " + "$" + MontoDeterminado  + " " +" Su cuota tiene un 40% de interes y  el monto es :" + " " +   "$" +   ( (MontoDeterminado / CantidadDeCuotas) * 1.40))
       return total

    }
    else ( CantidadDeCuotas >= 12)
    {
        let total = ( "El total de su compra es"  + " " + "$" + MontoDeterminado  + " " + " Su cuota tiene un 60% de interes y  el monto es: " + " " +   "$" +  ( (MontoDeterminado / CantidadDeCuotas) * 1.60))
         return total
    }


}



alert(CalcularCuotas(MontoDeterminado,CantidadDeCuotas))