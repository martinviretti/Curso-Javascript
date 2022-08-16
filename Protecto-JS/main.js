

// // Constructor de objeto Moto

// class Moto {
//     constructor(estilo,marca,precio,id){
//        this.estilo = estilo
//        this.marca = marca
//        this.precio = parseFloat(precio)
//        this.id = id
//     }   

//  }


// //  stock total
//  let stock = []
// //  Carrito de compras
//  let carrito = []

//  let id = 0



// //   Funcion para crear un objeto nuevo segun datos del usuario 
//  function CrearObjetoMoto(){

//     let estilo = ""
//     let opcion = parseInt(prompt("Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))

//     if(opcion === 1){
//         estilo = "brat"

//     }else if(opcion === 2){
//        estilo = " bobber"

//     }else if (opcion === 3){
//        estilo = "custom"

//     }else if (opcion === 4){
//        estilo = " Cafe Racer"

//     }else {
//        estilo = "Street fighter"
//     }

//     while( isNaN(opcion) || opcion === "" || opcion > 5 || opcion == 0) {
//         opcion = parseInt(prompt("Eror ,Ingrese un modelo de moto :\n \n1) Brat \n2) Bobber \n3) Custom \n4) Cafe Racer \n5) Street Fighter "))

//         if(opcion === 1){
//              estilo = "brat"

//         }else if(opcion === 2){
//             estilo = " bobber"

//         }else if (opcion === 3){
//             estilo = "custom"

//         }else if (opcion === 4){
//             estilo = " Cafe Racer"

//         }else {
//             estilo = "Street fighter"
//         }

//     }


//     let marca = "yamaha"
//     let opcion2 = parseInt(prompt("Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))


//     if(opcion2 === 1){
//         marca = "Yamaha"

//     }else if(opcion2 === 2){
//         marca = " Honda"

//     }else if (opcion2 === 3){
//         marca = "Suzuki"

//     }else if (opcion2 === 4){
//         marca = "kawasaki"

//     }else {
//         marca = "Harley Davidson"
//     }             


//     while( isNaN(opcion2) || opcion2 === "" || opcion2 > 5 || opcion2 == 0) {
//         opcion2 = parseInt(prompt("Eror ,Ingrese la marca de tu moto :\n \n1) Yamaha \n2) Honda \n3) Suzuki \n4) Kawasaki \n5) Harley Davidson "))


//         if(opcion2 === 1){
//             marca = "Yamaha"

//         }else if(opcion2 === 2){
//             marca = " Honda"

//         }else if (opcion2 === 3){
//             marca = "Suzuki"

//         }else if (opcion2 === 4){
//             marca = "kawasaki"

//         }else {
//             marca = "Harley Davidson"
//         }             
//     }


//     let precio = parseInt(prompt("Ingrese el precio del vehiculo : "))
//     while(isNaN(precio)){
//         precio = parseInt(prompt("Ingrese el precio del vehiculo : "))
//     }

//    id+=1    

//     const moto = new Moto(estilo,marca,precio,id)
//     alert("Producto Cargado")
//     return moto

//  }



// // //  Añadir al carrito el nuevo objeto creado por el usuario 


// let  confirmar = confirm("Desea cargar un producto al stock ?" )

// while (confirmar != false){
//     stock.push(CrearObjetoMoto())

//     confirmar = confirm("Desea cargar otro producto al stock ?" )
// }

// console.log(stock)





const containerBober = document.querySelector('.bober-container')
const templateCardBober = document.getElementById('template-card-bober').content




const templateTotalCarrito = document.getElementById('template-total-carrito').content
const tempalteProductoCarrito = document.getElementById('template-carrito').content
const productoCarrito = document.querySelector('.carrito')
const totalCarrito = document.querySelector('.total-carrito')

const footerTemplate = document.getElementById('template-total-carrito').content


const footer = document.getElementById('carrito-vacio')
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fechData()
})
containerBober.addEventListener('click', e => {
    addCarrito(e)
})


totalCarrito.addEventListener('click',e =>{
    btnAction(e)
})


const fechData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        pinterCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pinterCards = data => {
    data.forEach(producto => {
        templateCardBober.querySelector('h4').textContent = producto.nombre
        templateCardBober.querySelector('p').textContent = producto.precio
        templateCardBober.querySelector('.img-bober').setAttribute("src", producto.imgUrl)
        templateCardBober.querySelector('.button').dataset.id = producto.id
        const clone = templateCardBober.cloneNode(true)
        fragment.appendChild(clone)
    });

    containerBober.appendChild(fragment)
}

const addCarrito = e => {
    // console.log(e.target)
    // console.log(e.target.classList.contains('button'))
    if (e.target.classList.contains('button')) {
        setCarrito(e.target.parentElement.parentElement)
    }
    e.stopPropagation()

}

const setCarrito = objeto => {

    const producto = {
        id: objeto.querySelector('.button').dataset.id,
        nombre: objeto.querySelector('h4').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1

    }
    carrito[producto.id] = { ...producto }
    pintarCarrito()

}

const pintarCarrito = () => {
    totalCarrito.innerHTML = ""
    // console.log(carrito)
    Object.values(carrito).forEach(producto => {
        tempalteProductoCarrito.querySelector('.producto-nombre-carrito').textContent = producto.nombre
        tempalteProductoCarrito.querySelector('.cantidad-producto-carrito').textContent = producto.cantidad
        // botones
        tempalteProductoCarrito.querySelector('.btn-aumentar').dataset.id = producto.id
        tempalteProductoCarrito.querySelector('.btn-disminuir').dataset.id = producto.id

        tempalteProductoCarrito.querySelector('.precio-producto-carrito').textContent = producto.cantidad * producto.precio

        const clone = tempalteProductoCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    productoCarrito.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    // footer.innerHTML = ""


    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `

        <div class="carrito-vacio">
             
           <h3>Carrito vacio</h3>
        </div>
        `
        return
    }
    //  sumar cantidad y totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
    footerTemplate.querySelector('.cantidad-productos').textContent = nCantidad
    footerTemplate.querySelector('.total-fin').textContent = nPrecio

    const clone = footerTemplate.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const vaciarCarrito = document.querySelector('.btn-vaciar-carrito')
    vaciarCarrito.addEventListener('click', () => {
        carrito.Object = {}
        pintarCarrito()
    })

  

}


const btnAccion = e =>{
    console.log(e.target) }