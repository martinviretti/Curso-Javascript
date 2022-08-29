

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