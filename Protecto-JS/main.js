
let cuponDescuento = prompt("ingrese codigo de descuento: ")

const descuento1 = "MTMK10%"
const descuento2 = "MTMK15%"
const descuento3 = "MTMK20%"


// if (cuponDescuento === descuento1 ){
//    Producto.precio - 1.10
// }else if ( cuponDescuento === descuento2){
//    Producto.precio - 1.15
// }else(cuponDescuento === descuento3);{
//    Producto.precio - 1.29
// }


class Producto {
    constructor(nombre,precio,cantidad){
        this.nombre = nombre,
        this.precio = parseFloat(precio),
        this.cantidad = cantidad
    }

aplicarDescuento(){
    this.precio = this.precio - cuponDescuento
}

}

let arryCarrito = []


function CrearNuevoProducto (nombre,precio,cantidad){

    

    let Producto1 = new Producto(nombre,precio,cantidad)
    arryCarrito.push = Producto1
}

CrearNuevoProducto("pepe",1900,5)
CrearNuevoProducto("pepe",1900,4)
CrearNuevoProducto("pepe",1900,3)
alert(arryCarrito)