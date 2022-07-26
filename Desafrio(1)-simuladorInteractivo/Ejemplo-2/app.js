
let MontoApagar = parseInt(prompt("Ingrese el monto a abonar: "))

while(MontoApagar == " " || isNaN(MontoApagar)){
    MontoApagar = parseInt(prompt("Error ,Ingrese el monto a abonar: "))
}



let descuento = parseInt(prompt("Ingrse su descuento:" + " 25% , 35% o 50% " ))

let impuestos = 1.21

 if(descuento === 25){
    descuento = 0.75

}else if(descuento === 35){
    descuento = 0.65

}else if(descuento === 50){
    descuento = 0.50

}else  while(descuento !== 25 || descuento !== 35 || descuento !== 50 || descuento === " " || isNaN(descuento)){
        descuento = parseInt(prompt("ingrse un descueno valido : "))
        
        if(isNaN(descuento)){  
            
            if(descuento == 25){
            descuento = 0.75
            continue
        }else if(descuento == 35){ 
            descuento = 0.65
            continue
            ;
        }else(descuento == 50) ;{
            
            descuento = 0.50
            continue
     
    }



      


        }
      
    
    


  alert( CalcularResultadoTotal(MontoApagar,descuento,impuestos))


function CalcularResultadoTotal (MontoApagar,descuento,impuestos){
   
  let  montFinal = (MontoApagar * descuento ) * impuestos 

    return montFinal 
}


// cuando pongo un descuento invalido me entra en el bucle while y aunque ponga un descuento bien no sale 