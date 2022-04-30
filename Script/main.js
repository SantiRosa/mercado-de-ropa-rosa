let carrito = [];

// variable global para saber si esta el producto en pesos o en dls
let esDolar = false;
let cantidadEnCarrito = 0;

let productos = [
    { id: 1, titulo: "Remera Blanca", precio: 1000, stock: 0, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/remerablanca.jpg"},
    { id: 2, titulo: "Remera Negra", precio: 1000, stock: 15, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/remeranegra.jpg" },     
    { id: 3, titulo: "Remera Gris", precio: 1000, stock: 5, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/remeragris.jpg" },
    { id: 4, titulo: "Remera Azul", precio: 1000, stock: 5, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/remeraazulmarino.jpg" },
    { id: 5, titulo: "Buzo Blanco", precio: 3000, stock: 8, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/buzoblanco.jpg" },
    { id: 6, titulo: "Buzo Gris", precio: 3000, stock: 9, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/buzogris.jpg" },
    { id: 7, titulo: "Buzo Negro", precio: 3000, stock: 5, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/buzonegro.jpg" },
    { id: 8, titulo: "Buzo Azul", precio: 3000, stok: 0, cantidadComprada: 0, subtotalCompra: 0, imagen: "../imagenes/buzoazulmarino.jpg" },
]

const agregarAlCarrito = (producto) => {
    existeEnCarrito(producto) ? actualizarProducto(producto) : (
        actualizarProducto(producto),
        carrito = [...carrito, producto]
    );
};

const actualizarProducto = (producto) =>{
    let {cantidadComprada, stock, subtotalCompra} = producto;
    cantidadComprada+=1;
    stock -=1; 
    subtotalCompra = cantidadComprada * producto.precio;
    producto.cantidadComprada = cantidadComprada;
    producto.stock = stock;
    producto.subtotalCompra = subtotalCompra;
}

function mostrarCardsEnElhtml(cards) {
    document.getElementById("creadorCards").innerHTML = cards;
}

function filtrarProducto() {
    const productoRequerido = document.getElementById("buscador").value.toUpperCase().trim();
    console.log(productoRequerido);
    
    const remerasFiltradas = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(productoRequerido);
    });
    
    generarCards(remerasFiltradas);
}

function encontrarProductoPorId(id) {
    return productos.find(element => element.id === parseInt(id));
}

function validarStock(producto) {
    return producto.stock > 0;
}

function existeEnCarrito(producto) {
    if (carrito != null){
        return carrito.find(element => element.id === producto.id);
    }
    else{
        return false;
    }
    
}

function btnCompra_onClick(id) {
    const producto = encontrarProductoPorId(id);
    if(validarStock(producto)){
        agregarAlCarrito(producto);
        // Actualizar el numero en el carrito
        // Contar cantidad en el carrito
        cantidadEnCarrito = notificacion(carrito);
        // Actualizar el numero del carrito
        document.getElementById("cantidadActualCarrito").innerHTML = cantidadEnCarrito;
        // Actualizo en local storage el carrito para leerlo desde la pagina de carrito
        localStorage.setItem("carrito", JSON.stringify(carrito));
        Toastify({
            text: `Añadiste ${producto.titulo}`,
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    else {
        swal({
            title:`Te pedimos disculpas` ,
            text: "Por el momento no disponemos de stock del producto seleccionado",
            icon: "warning",
            dangerMode: true,
          });
    }
    
}

function generarCards(productosAmostrar){
    if (esDolar == false){
        let acumuladorDeCards = ``;
        productosAmostrar.forEach(producto => {
            acumuladorDeCards += `<div class="col-3">
            <div class="remerauno">
            <div class="card h-100">
            <div class="badge bg-dark position absolute" top: 0.1rem>${producto.stock > 0 ? "Disponible" : "Sin Stock"}</div>
            <img src=${producto.imagen} class="card-img-top" alt="Remerauno" width="200" height="150">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">$  ${producto.precio}</p>
                <button class="btn btn-outline-success carritouno" onclick="btnCompra_onClick('${producto.id}')">Añadir</button>
            </div>
            </div>
            </div>  
        </div>`;
        });
        mostrarCardsEnElhtml(acumuladorDeCards);
    }
    else{
        let acumuladorDeCards = ``;
        productosAmostrar.forEach(producto => {
            acumuladorDeCards += `<div class="col-3">
            <div class="remerauno">
            <div class="card h-100">
            <div class="badge bg-dark position absolute" top: 0.1rem>${producto.stock > 0 ? "Disponible" : "Sin Stock"}</div>
            <img src=${producto.imagen} class="card-img-top" alt="Remerauno" width="200" height="150">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">USD  ${producto.precio}</p>
                <button class="btn btn-outline-success carritouno" onclick="btnCompra_onClick('${producto.id}')">Añadir</button>
            </div>
            </div>
            </div>  
        </div>`;
        });
        mostrarCardsEnElhtml(acumuladorDeCards);
    }
}

carrito = JSON.parse(localStorage.getItem("carrito"));
if (carrito == null){
    carrito = [];
    cantidadEnCarrito = 0;
}
else{
    cantidadEnCarrito = notificacion(carrito);
}

document.getElementById("cantidadActualCarrito").innerHTML = cantidadEnCarrito;
generarCards(productos);


// function sarasa(){
//     let array = [1,2,3,4];
//     let arrayClone = [...array, 5];
// }

//api-dolar-argentina.herokuapp.com/api/dolaroficial
function btnCompra_onDolar(){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")//, { mode: 'no-cors'})
    .then((response) => response.json())
    .then((data) => MyFunction(data))
}

function MyFunction(arrayWebDolar){
    let tipoCambio;
    arrayWebDolar.forEach((MyPrecioDolar) => {
        if (MyPrecioDolar.casa.nombre == 'Dolar Oficial'){
            tipoCambio = parseFloat(MyPrecioDolar.casa.venta);
        }
    });
    if (esDolar == false){
        productos.forEach((producto) => {
            producto.precio = parseFloat(producto.precio/tipoCambio).toFixed(2);
        })
        esDolar = true;
    }
    else
    {
        productos.forEach((producto) => {
            producto.precio = parseFloat(producto.precio*tipoCambio).toFixed(0);
        })
        esDolar = false;
    }
    generarCards(productos);
}

function notificacion(carritoActual){
    let cantidadTotal = 0;
    if (carritoActual != null){
        carritoActual.forEach((elementoEnCarrito) => {
            cantidadTotal += elementoEnCarrito.cantidadComprada;
        });
    }
    else{
        ;
    }
    
    return cantidadTotal;
}