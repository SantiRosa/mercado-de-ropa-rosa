// Recuperar los datos del localstorages del
let carrito = [];
let totalCompra = 0;
let totalProductos = 0;

function getCarritoFromLocalStorage(){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    return carrito;
}

carrito = getCarritoFromLocalStorage();
totalCompra = getTotalDeCompra(carrito);
totalProductos = getTotalDeProductos(carrito);
generarLista(carrito);

function getTotalDeCompra(carrito){
    let precioTotal = 0;
    carrito.forEach(productoEnCarrito => {
        precioTotal += productoEnCarrito.subtotalCompra;
    });
    return precioTotal;
}

function getTotalDeProductos(carrito){
    let cantidadTotal = 0;
    carrito.forEach(productoEnCarrito => {
        cantidadTotal += productoEnCarrito.cantidadComprada;
    });
    return cantidadTotal;
}

function generarLista(carrito){
    let acumuladorDeCards = ``;
    carrito.forEach(productoEnCarrito => {
        acumuladorDeCards += `<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${productoEnCarrito.titulo}</div>
          Subtotal: $ ${productoEnCarrito.subtotalCompra}
        </div>
        <span class="badge bg-primary rounded-pill">${productoEnCarrito.cantidadComprada}</span>
      </li>`;
    });
    acumuladorDeCards += `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">TOTAL COMPRA: $ ${totalCompra}</div>
    </div>
    <span class="badge bg-primary rounded-pill">${totalProductos}</span>
  </li>`
    mostrarCardsEnElhtml(acumuladorDeCards);
}

function mostrarCardsEnElhtml(cards) {
    document.getElementById("creadorCardsCarrito").innerHTML = cards;
}