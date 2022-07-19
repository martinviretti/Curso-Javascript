
const p1 = "Porducto 1  valor "+ " " + "$"+ 400
const p2 = "Porducto 2  valor "+ " " + "$"+ 200
const p3 = "Porducto 3  valor "+ " " + "$"+ 300
const p4 = "Porducto 4  valor "+ " " + "$"+ 100
const p5 = "Porducto 5  valor "+ " " + "$"+ 50
const p6 = "Porducto 6  valor "+ " " + "$"+ 25


let CantidadDeProductos = prompt("Indique la cantidad de productos que desea comprar:")

let productosSeleccionados = []

for(i = 0 ; i >= CantidadDeProductos ; i++){
     let PreguntaProducto = prompt("Ingrese el primer producto que desea :")
     if(PreguntaProducto == p1 || p2 || p3 || p4 || p5 || p6){
        productosSeleccionados.push(PreguntaProducto)
     }
}

alert(productosSeleccionados)




