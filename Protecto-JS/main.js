

// Constructor de objeto Moto

class Moto {
    constructor(estilo,marca,precio,id){
       this.estilo = estilo
       this.marca = marca
       this.precio = parseFloat(precio)
       this.id = id
    }   
 
 }


//  stock total
 let stock = []
//  Carrito de compras
 let carrito = []
 
 let id = 0
 

 
//   Funcion para crear un objeto nuevo segun datos del usuario 
 function CrearObjetoMoto(){
     
    let estilo = ""
    let opcion = parseInt(prompt("Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
    
    if(opcion === 1){
        estilo = "brat"
       
    }else if(opcion === 2){
       estilo = " bobber"
       
    }else if (opcion === 3){
       estilo = "custom"
       
    }else if (opcion === 4){
       estilo = " Cafe Racer"
       
    }else {
       estilo = "Street fighter"
    }
    
    while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
        opcion = parseInt(prompt("Eror ,Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))
        
        if(opcion === 1){
             estilo = "brat"
            
        }else if(opcion === 2){
            estilo = " bobber"
            
        }else if (opcion === 3){
            estilo = "custom"
            
        }else if (opcion === 4){
            estilo = " Cafe Racer"
            
        }else {
            estilo = "Street fighter"
        }
                        
    }
   

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

    
    let precio = parseInt(prompt("Ingrese el precio del vehiculo : "))
    while(isNaN(precio)){
        precio = parseInt(prompt("Ingrese el precio del vehiculo : "))
    }
 
   id+=1    

    const moto = new Moto(estilo,marca,precio,id)
    alert("Producto Cargado")
    return moto
   
 }


 
// //  Añadir al carrito el nuevo objeto creado por el usuario 


let  confirmar = confirm("Desea cargar un producto al stock ?" )

while (confirmar != false){
    stock.push(CrearObjetoMoto())
    
    confirmar = confirm("Desea cargar otro producto al stock ?" )
}


console.log(stock)


