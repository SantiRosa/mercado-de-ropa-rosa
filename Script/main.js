const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "Remera Blanca", precio: 1000, stock: 0, imagen: "../imagenes/remerablanca.jpg"},
    { id: 2, titulo: "Remera Negra", precio: 1000, stock: 15, imagen: "../imagenes/remeranegra.jpg" },     
    { id: 3, titulo: "Remera Gris", precio: 1000, stock: 5, imagen: "../imagenes/remeragris.jpg" },
    { id: 4, titulo: "Remera Azul", precio: 1000, stock: 5, imagen: "../imagenes/remeraazulmarino.jpg" },
    { id: 5, titulo: "Buzo Blanco", precio: 3000, stock: 8, imagen: "../imagenes/buzoblanco.jpg" },
    { id: 6, titulo: "Buzo Gris", precio: 3000, stock: 9, imagen: "../imagenes/buzogris.jpg" },
    { id: 7, titulo: "Buzo Negro", precio: 3000, stok: 4, imagen: "../imagenes/buzonegro.jpg" },
    { id: 8, titulo: "Buzo Azul", precio: 3000, stok: 0, imagen: "../imagenes/buzoazulmarino.jpg" },
]

generarCards(productos);

function generarCards(productosAmostrar){
    let acumuladorDeCards = ``;
    productosAmostrar.forEach(productos => {
        acumuladorDeCards += `<div class="col-3">
        <div class="remerauno">
        <div class="card h-100">
        <div class="badge bg-dark position absolute" top: 0.1rem>${productos.stock > 0 ? "Disponible" : "Sin Stock"}</div>
          <img src=${productos.imagen} class="card-img-top" alt="Remerauno" width="200" height="150">
          <div class="card-body">
            <h5 class="card-title">${productos.titulo}</h5>
            <p class="card-text">${productos.precio}</p>
            <button class="btn btn-outline-success carritouno" onclick="btnRemera_onClick('blanca')">Añadir</button>
          </div>
        </div>
        </div>  
      </div>`;
    });
    mostrarCardsEnElhtml(acumuladorDeCards);
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