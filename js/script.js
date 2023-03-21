const formEl = document.querySelector('#formulario')
const nombreEL = document.querySelector('#nombre')
const precioEl = document.querySelector('#precio')
const tbodyEl = document.querySelector('#tbody')

const expRegNombre = /^[a-zA-ZÀ\u00f1\u00d1\s]/
const expRegPrecio = /^[0-9]+([.][0-9]{1,2})/


function añadirProducto() {
    
    const producto = document.createElement('tr')
    tbodyEl.appendChild(producto)

    const nombre = nombreEL.value.trim()
    const precio = Number(precioEl.value).trim()

    if (nombre === '' || isNaN(precio)) return


    if (!expRegNombre.test(nombre) || !expRegPrecio.test(precio)) {
       
        const colNombre = document.createElement('th')
        const colPrecio = document.createElement('th')

        colNombre.innerHTML += nombre
        colPrecio.innerHTML += `${precio} €`

        producto.appendChild(colNombre)
        producto.appendChild(colPrecio)
    }
}

 
formEl.addEventListener('submit', (event) => {
    event.preventDefault() 
    añadirProducto()
})


