let MontoDeterminado = parseInt(prompt("Ingese el total de compra :"))


while(isNaN(MontoDeterminado) || MontoDeterminado <= 0 ){
    MontoDeterminado = ParseInt(prompt(" No ingreso un Monto valido, Ingrse el total de compra:"))
}

let CantidadDeCuotas = parseInt(prompt("Cantidad de cuotas :"))

while(isNaN(CantidadDeCuotas) || CantidadDeCuotas <= 0){
    CantidadDeCuotas = ParseInt(prompt(" No ingreso una cantidad de cuotas valida, Ingrse nuevamente:"))
}



function CalcularCuotas (MontoDeterminado,CantidadDeCuotas){
    if (CantidadDeCuotas > 0 && CantidadDeCuotas<= 5)
    {
       let total = ( " su cuota seria de :" + ( (MontoDeterminado / CantidadDeCuotas) * 1.25))
       return total
    }
    else if(CantidadDeCuotas > 5 && CantidadDeCuotas < 12)
    {
       let total = ( " su cuota seria de :" +  ( (MontoDeterminado / CantidadDeCuotas) * 1.40))
       return total

    }
    else ( CantidadDeCuotas >= 12)
    {
        let total = ( " su cuota seria de :" +  ( (MontoDeterminado / CantidadDeCuotas) * 1.60))
         return total
    }

}



alert(CalcularCuotas(MontoDeterminado,CantidadDeCuotas))