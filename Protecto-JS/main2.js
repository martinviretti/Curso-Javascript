

// esto sirve

// let estilo = ""
// let opcion = parseInt(prompt("Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
// while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
//     opcion = parseInt(prompt("Eror ,Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
//     console.log(opcion)

//     if(opcion === 1){
//        estilo = "brat"
        
//    }else if(opcion === 2){
//         estilo = " bobber"
        
//    }else if (opcion === 3){
//         estilo = "custom"
        
//   }else if (opcion === 4){
//         estilo = " Cafe Racer"
        
//   }else {
//     estilo = "Street fighter"
//   }
                    
// }







// Moto {
//     constructor(estilo,marca,precio,id){
//        this.estilo = estilo
//        this.marca = marca
//        this.precio = parseFloat(precio)
//        this.id = id
//     }
 
//  }



//  let stock = []
//  let carrito = []
 

 

//  let id = 0;

//  function CrearObjetoMoto(){
     
//     let estilo = ""
//     let opcion = parseInt(prompt("Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
//     while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
//         opcion = parseInt(prompt("Eror ,Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
//         console.log(opcion)

//         if(opcion === 1){
//         estilo = "brat"
            
//         }else if(opcion === 2){
//             estilo = " bobber"
            
//         }else if (opcion === 3){
//             estilo = "custom"
            
//         }else if (opcion === 4){
//             estilo = " Cafe Racer"
            
//         }else {
//         estilo = "Street fighter"
//         }
                        
//     }

  

//     let marca = ""
//     opcion = parseInt( prompt("Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))
//     while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
//         opcion = parseInt(prompt("Eror ,Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))
//         console.log(opcion)

//         if(opcion === 1){
//             marca = "Yamaha"
            
//         }else if(opcion === 2){
//             marca = " Honda"
            
//         }else if (opcion === 3){
//             marca = "Suzuki"
            
//         }else if (opcion === 4){
//             marca = "kawasaki"
            
//         }else {
//             marca = "Harley Davidson"
//         }
                        
//     }

//     let precio = prompt("Ingrese el precio del vehiculo : ")
    
//     id++
//     const moto= new Moto(estilo,marca,precio,id)
//     return moto

//  }






// class Moto {
//     constructor(estilo,marca,precio,id){
//        this.estilo = estilo
//        this.marca = marca
//        this.precio = parseFloat(precio)
//        this.id = id
//     }
 
//  }



//  let stock = []
//  let carrito = []
 

 

//  let id = 0;

//  function CrearObjetoMoto(){
     
//     let estilo = ""
//     let opcion = parseInt(prompt("Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
//     while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
//         opcion = parseInt(prompt("Eror ,Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
//         console.log(opcion)

//         if(opcion === 1){
//         estilo = "brat"
            
//         }else if(opcion === 2){
//             estilo = " bobber"
            
//         }else if (opcion === 3){
//             estilo = "custom"
            
//         }else if (opcion === 4){
//             estilo = " Cafe Racer"
            
//         }else {
//         estilo = "Street fighter"
//         }
                        
//     }

  

//     let marca = ""
//     opcion = parseInt( prompt("Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))
//     while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
//         opcion = parseInt(prompt("Eror ,Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))
//         console.log(opcion)

//         if(opcion === 1){
//             marca = "Yamaha"
            
//         }else if(opcion === 2){
//             marca = " Honda"
            
//         }else if (opcion === 3){
//             marca = "Suzuki"
            
//         }else if (opcion === 4){
//             marca = "kawasaki"
            
//         }else {
//             marca = "Harley Davidson"
//         }
                        
//     }

//     let precio = prompt("Ingrese el precio del vehiculo : ")

//     id++
//     const moto= new Moto(estilo,marca,precio,id)
//     return moto

//  }






if(opcion2 === 1){
    marca = "Yamaha"
    
}else if(opcion2 === 2){
    marca = " Honda"
    
}else if (opcion2 === 3){
    marca = "Suzuki"
    
}else if (opcion2 === 4){
    marca = "kawasaki"
    
}else {
    marca = "Harley Davidson"
}             








function ValidarOpciones(opcion2,marca){
    if(opcion2 === 1){
        marca = "Yamaha"
        
    }else if(opcion2 === 2){
        marca = " Honda"
        
    }else if (opcion2 === 3){
        marca = "Suzuki"
        
    }else if (opcion2 === 4){
        marca = "kawasaki"
        
    }else {
        marca = "Harley Davidson"
    }         
}


ValidarOpciones(opcion2,marca)











let marca = "yamaha"
let opcion2 = parseInt(prompt("Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))

if(opcion2 === 1){
    marca = "Yamaha"
    
}else if(opcion2 === 2){
    marca = " Honda"
    
}else if (opcion2 === 3){
    marca = "Suzuki"
    
}else if (opcion2 === 4){
    marca = "kawasaki"
    
}else {
    marca = "Harley Davidson"
}             


while( isNaN(opcion2) || opcion2 === "" || opcion2 > 5 || opcion2 == 0) {
    opcion2 = parseInt(prompt("Eror ,Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))
    

    if(opcion2 === 1){
        marca = "Yamaha"
        
    }else if(opcion2 === 2){
        marca = " Honda"
        
    }else if (opcion2 === 3){
        marca = "Suzuki"
        
    }else if (opcion2 === 4){
        marca = "kawasaki"
        
    }else {
        marca = "Harley Davidson"
    }             
}