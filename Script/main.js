
let stockactualRemeras = 20;
let precioactualRemeras = 1500;
let costoenvioRemeras = 500;

function btnRemera_onclick() {
    const stockDisponible = validarQuiebre(stockactualRemeras, 1); 
    if(stockDisponible===true) {
        stockactualRemeras = actualizarStock(stockactualRemeras, 1)
        console.log(`añadido remeras a ${precioactualRemeras} mas ${costoenvioRemeras} de envío y queda stock ${stockactualRemeras}`);
    } else{
        console.log(`No disponible`);
    }    
}

function validarQuiebre(stockactualRemeras, compra) {
    if(stockactualRemeras > compra) {
        return true;
    } else{
        return false;
    }
}

function actualizarStock(stockactualRemeras, compra) {
    return (stockactualRemeras-compra);
}

//-------------------------BUZOS---------------------------------------//

let stockactualBuzos = 11;
let stockactualBuzosAzulMarino = 15;
let stockactualBuzosGris = 25;
let precioactualBuzos = 3000;
let precioactualBuzosAzulMarino = 3000;
let precioactualBuzosGris = 3000;
let costoenvioBuzos = 500;

function btnBuzos_onclick_blanco() {
    const stockDisponible = validarQuiebre(stockactualBuzos, 1); 
    if(stockDisponible===true) {
        stockactualBuzos = actualizarStock(stockactualBuzos, 1)
        console.log(`añadido Buzos a ${precioactualBuzos} mas ${costoenvioBuzos} de envío y queda stock ${stockactualBuzos}`);
    } else{
        console.log(`No disponible`);
    }    
}

function btnBuzos_onclick_azul_marino() {
    const stockDisponible = validarQuiebre(stockactualBuzosAzulMarino, 1); 
    if(stockDisponible===true) {
        stockactualBuzosAzulMarino = actualizarStock(stockactualBuzosAzulMarino, 1)
        console.log(`añadido Buzos a ${precioactualBuzosAzulMarino} mas ${costoenvioBuzos} de envío y queda stock ${stockactualBuzosAzulMarino}`);
    } else{
        console.log(`No disponible`);
    }    
}

function btnBuzos_onclick_gris() {
    const stockDisponible = validarQuiebre(stockactualBuzosGris, 1); 
    if(stockDisponible===true) {
        stockactualBuzosGris = actualizarStock(stockactualBuzosGris, 1)
        console.log(`añadido Buzos a ${precioactualBuzosGris} mas ${costoenvioBuzos} de envío y queda stock ${stockactualBuzosGris}`);
    } else{
        console.log(`No disponible`);
    }    
}

//-------------------------PANTALONES---------------------------------------/
// const producto = {
//     titulo: `jean`,  
//     precio: 6000,
//     categoria: `pantalones`,
// };

const PRODUCTO = new Producto(`jean`, 6000, `pantalones`);
const PRODUCTO2 = new Producto2(`gabardina`, 6000, `pantalones`);
const PRODUCTO3 = new Producto3(`jogger`, 6000, `pantalones`);

agregarAlCarrito(PRODUCTO);
agregarAlCarrito(PRODUCTO2);
agregarAlCarrito(PRODUCTO3);
//-------------------------declaracion fx constructora---------------------------------------/
function Producto(titulo, precio, categoria){
    this.titulo = titulo;
    this.precio = precio;
    this.categoria = categoria;
}
function Producto2(titulo, precio, categoria){
    this.titulo = titulo;
    this.precio = precio;
    this.categoria = categoria;
}
function Producto3(titulo, precio, categoria){
    this.titulo = titulo;
    this.precio = precio;
    this.categoria = categoria;
}

function agregarAlCarrito(producto) {
    const leyenda = `Añadiste ${producto.titulo} - $ ${producto.precio}`;
    console.log(leyenda);
};