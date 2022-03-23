const STOCK_INICIAL_REMERAS = 5;
const COSTO_ENVIO = 500;
let stockRemeras = [];
let carrito = [];

class Producto{

    constructor(categoria, color, precio){
        this.categoria = categoria;
        this.color = color;
        this.precio = precio;
    }
}

function inicializarStock(){
    for(i=0;i<STOCK_INICIAL_REMERAS;i++){
        stockRemeras.push(new Producto('Remeras','blanca', 1000));
        stockRemeras.push(new Producto('Buzos', 'gris', 1500));
        stockRemeras.push(new Producto('Pantalones', 2000));
        stockRemeras.push(new Producto('azul marino', 1000));
    }
}

function validarStock(color){
    return stockRemeras.find(element => element.color === color);
}

function agregarCarrito(producto){
    carrito.push(producto);
}

function reducirStock(producto){
    index = stockRemeras.indexOf(producto);
    if (index != -1){
        stockRemeras.splice(index, 1);
    }
}

function btnRemera_onClick(color) {
    //validar que existe remera de color en stock
    const remera = validarStock(color);
    if (remera != undefined){
        reducirStock(remera);
        agregarCarrito(remera);
        console.log(stockRemeras)
        console.log(carrito)
    }else{
        alert('No hay mas remeras de color ' + color);
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

        const remerasFiltradas = stockRemeras.filter((producto) => {
        return producto.color.toUpperCase().match(productoRequerido);
    });
    console.log(remerasFiltradas);
}   