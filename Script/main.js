const STOCK_INICIAL_REMERAS = 5;
const STOCK_INICIAL_BUZOS = 10;
const STOCK_INICIAL_PANTALONES = 15;

const COSTO_ENVIO = 500;
let stockProductos = [];
//let stockRemeras = [];
let carrito = [];

class Producto{
    constructor(color, precio, categoria, stock, imagen){
        this.categoria = categoria;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

// class Remera{
//     constructor(){
//         this.color = color;
//         this.precio = precio;
//     }
// }

// class Buzo{
//     constructor(){
//         this.color = color;
//         this.precio = precio;
//     }
// }

// class Pantalon{
//     constructor(){
//         this.color = color;
//         this.precio = precio;
//     }
// }

function inicializarStock(){

    const remeraBlanca  = new Producto('blanca',1000,'remera', STOCK_INICIAL_REMERAS, "../imagenes/remerablanca.jpg");
    const remeraGris    = new Producto('gris',1000,'remera', STOCK_INICIAL_REMERAS, "../imagenes/remeragris.jpg");
    const remeraNegra   = new Producto('negra',1000,'remera', STOCK_INICIAL_REMERAS, "../imagenes/remeranegra.jpg");
    const remeraAzulM   = new Producto('azul marino',1000,'remera', STOCK_INICIAL_REMERAS,"../imagenes/remeraazulmarino.jpg");

    const buzoBlanca  = new Producto('blanca',1500,'buzo', STOCK_INICIAL_BUZOS, "../imagenes/buzoblanco.jpg");
    const buzoGris    = new Producto('gris',1500,'buzo', STOCK_INICIAL_BUZOS, "../imagenes/buzogris.jpg");
    const buzoNegra   = new Producto('negra',1500,'buzo', STOCK_INICIAL_BUZOS, "../imagenes/buzonegro.jpg");
    const buzoAzulM   = new Producto('azul marino',1500, 'buzo', STOCK_INICIAL_BUZOS, "../imagenes/buzoazulmarino.jpg");

    const pantalonBlanca  = new Producto('blanca',2000,'pantalon', STOCK_INICIAL_PANTALONES, "../imagenes/pantalonjean.jpg");
    const pantalonGris    = new Producto('gris',2000,'pantalon', STOCK_INICIAL_PANTALONES, "../imagenes/pantalongabardina.jpg");
    const pantalonNegra   = new Producto('negra',2000,'pantalon', STOCK_INICIAL_PANTALONES, "../imagenes/pantalonjogger.jpg");
    const pantalonAzulM   = new Producto('azul marino',2000,'pantalon', STOCK_INICIAL_PANTALONES, "../imagenes/pantalonjeannegro.jpg");

    stockProductos.push(remeraBlanca);
    stockProductos.push(remeraGris);
    stockProductos.push(remeraNegra);
    stockProductos.push(remeraAzulM);

    stockProductos.push(buzoBlanca);
    stockProductos.push(buzoGris);
    stockProductos.push(buzoNegra);
    stockProductos.push(buzoAzulM);

    stockProductos.push(pantalonBlanca);
    stockProductos.push(pantalonGris);
    stockProductos.push(pantalonNegra);
    stockProductos.push(pantalonAzulM);

    const remeraBlancaCarrito  = new Producto('blanca',1000,'remera', 0, "../imagenes/remerablanca.jpg");
    const remeraGrisCarrito    = new Producto('gris',1000,'remera', 0, "../imagenes/remeragris.jpg");
    const remeraNegraCarrito   = new Producto('negra',1000,'remera', 0, "../imagenes/remeranegra.jpg");
    const remeraAzulMCarrito   = new Producto('azul marino',1000,'remera', 0,"../imagenes/remeraazulmarino.jpg");

    const buzoBlancaCarrito  = new Producto('blanca',1500,'buzo', 0, "../imagenes/buzoblanco.jpg");
    const buzoGrisCarrito    = new Producto('gris',1500,'buzo', 0, "../imagenes/buzogris.jpg");
    const buzoNegraCarrito   = new Producto('negra',1500,'buzo', 0, "../imagenes/buzonegro.jpg");
    const buzoAzulMCarrito   = new Producto('azul marino',1500, 'buzo', 0, "../imagenes/buzoazulmarino.jpg");

    const pantalonBlancaCarrito  = new Producto('blanca',2000,'pantalon', 0, "../imagenes/pantalonjean.jpg");
    const pantalonGrisCarrito    = new Producto('gris',2000,'pantalon', 0, "../imagenes/pantalongabardina.jpg");
    const pantalonNegraCarrito   = new Producto('negra',2000,'pantalon', 0, "../imagenes/pantalonjogger.jpg");
    const pantalonAzulMCarrito   = new Producto('azul marino',2000,'pantalon', 0, "../imagenes/pantalonjeannegro.jpg");

    carrito.push(remeraBlancaCarrito);
    carrito.push(remeraGrisCarrito);
    carrito.push(remeraNegraCarrito);
    carrito.push(remeraAzulMCarrito);

    carrito.push(buzoBlancaCarrito);
    carrito.push(buzoGrisCarrito);
    carrito.push(buzoNegraCarrito);
    carrito.push(buzoAzulMCarrito);

    carrito.push(pantalonBlancaCarrito);
    carrito.push(pantalonGrisCarrito);
    carrito.push(pantalonNegraCarrito);
    carrito.push(pantalonAzulMCarrito);

    // for(i=0;i<STOCK_INICIAL_REMERAS;i++){
    //     stockProductos.push(remeraBlanca);
    //     stockProductos.push(remeraGris);
    //     stockProductos.push(remeraNegra);
    //     stockProductos.push(remeraAzulM);
    // }

    // for(i=0;i<STOCK_INICIAL_BUZOS;i++){
    //     stockProductos.push(buzoBlanca);
    //     stockProductos.push(buzoGris);
    //     stockProductos.push(buzoNegra);
    //     stockProductos.push(buzoAzulM);
    // }

    // for(i=0;i<STOCK_INICIAL_PANTALONES;i++){
    //     stockProductos.push(pantalonBlanca);
    //     stockProductos.push(pantalonGris);
    //     stockProductos.push(pantalonNegra);
    //     stockProductos.push(pantalonAzulM);
    // }

    generarCards(stockProductos);
}

function buscarElementoRemera(color){
    return stockProductos.find(element =>  (element.categoria === 'remera') && (element.color === color) );
}
function buscarElementoBuzo(color){
    return stockProductos.find(element =>  (element.categoria === 'buzo') && (element.color === color) );
}
function buscarElementoPantalon(color){
    return stockProductos.find(element =>  (element.categoria === 'pantalon') && (element.color === color) );
}

function validarStock(producto){
    if(producto.stock > 0 )
        return true;
    return false;
}

function agregarCarrito(ropa, color){
    elementoCarrito = carrito.find(element =>  (element.categoria === ropa) && (element.color === color) );
    elementoCarrito.stock = elementoCarrito.stock+1;
}

function reducirStock(producto){
    producto.stock = producto.stock - 1;
}

// function btnRemera_onClick(color) {
//     //validar que existe remera de color en stock
//     const remera = validarStock(color);
//     if (remera != undefined){
//         reducirStock(remera);
//         agregarCarrito(remera);
//         console.log(stockRemeras)
//         console.log(carrito)
//     }else{
//         alert('No hay mas remeras de color ' + color);
//     }
// }

function btnProducto_onClick(ropa, color) {
    //validar que existe remera de color en stock
    if (ropa ==='remera'){
        const remera = buscarElementoRemera(color);
        const hayRemeras = validarStock(remera);
        if (hayRemeras != false){
            reducirStock(remera);
            agregarCarrito(ropa, color);
            console.log(carrito)
        }else{
            alert('No hay mas remeras de color ' + color);
        }
    }

    if (ropa==='buzo'){
        const buzo = buscarElementoBuzo(color);
        const hayBuzos = validarStock(buzo);
        if (hayBuzos != false){
            reducirStock(buzo);
            agregarCarrito(ropa, color);
            console.log(carrito)
        }else{
            alert('No hay mas buzos de color ' + color);
        }
    }

    if (ropa==='pantalon'){
        const pantalon = buscarElementoPantalon(color);
        const hayPantalones = validarStock(pantalon);
        if (hayPantalones != false){
            reducirStock(pantalon);
            agregarCarrito(ropa, color);
            console.log(carrito)
        }else{
            alert('No hay mas pantalones de color ' + color);
        }
    }
}

function totalCarrito(){
    let total = 0;
    carrito.forEach(element => total+=element.precio);
    return total + COSTO_ENVIO;
}

function filtrarProducto(){
    const productoRequerido = document.getElementById("buscador").value.toUpperCase().trim();
    console.log(productoRequerido);

        const productosFiltrados = stockProductos.filter((producto) => {
            return producto.categoria.toUpperCase().match(productoRequerido);
    });
    console.log(productosFiltrados);
}

function generarCards(stockProductos){
    let acumuladorDeCards = ``;
    stockProductos.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col">
        <div class="remerauno">
        <div class="card h-100">
          <img src="${elementoDelArray.imagen}" class="card-img-top" alt="Remerauno" width="200" height="150">
          <div class="card-body">
            <h5 class="card-title">${elementoDelArray.categoria}</h5>
            <p class="card-text">${elementoDelArray.precio}</p>
            <button class="btn btn-outline-success carritouno" onclick="btnProducto_onClick('${elementoDelArray.categoria}','${elementoDelArray.color}')">Añadir</button>
          </div>
        </div>
        </div>   
      </div>`
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards){
    document.getElementById("unificadorRemeras").innerHTML = cards;
}