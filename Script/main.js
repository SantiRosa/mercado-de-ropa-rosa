
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

//-------------------------PANTALONES---------------------------------------//
class producto{
    pedido(stockactualPantalones, precioactualPantalones, costoenvioPantalones)
}

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];
const pantalones = [
    {id: 1, stockactualPantalones, precioactualPantalones, costoenvioPantalones},
];
agregarAlCarrito(pantalones[0]) ;
console.log(carrito);

function btnPantalones_onclick_Jean() {
    const stockDisponible = validarQuiebre(stockactualPantalones, 1); 
    if(stockDisponible===true) {
    stockactualPantalones = actualizarStock(stockactualPantalones, 1)
    console.log(`añadido Pantalones a ${precioactualPantalones} mas ${costoenvioPantalones} de envío y queda stock ${stockactualPantalones}`);
    } else{
    console.log(`No disponible`);
    }
}

// let stockactualPantalones = 15;
// let precioactualPantalones = 5000;
// let costoenvioPantalones = 500;

// function btnPantalones_onclick() {
//     const stockDisponible = validarQuiebre(stockactualPantalones, 1); 
//     if(stockDisponible===true) {
//         stockactualPantalones = actualizarStock(stockactualPantalones, 1)
//         console.log(`añadido Pantalones a ${precioactualPantalones} mas ${costoenvioPantalones} de envío y queda stock ${stockactualPantalones}`);
//     } else{
//         console.log(`No disponible`);
//     }    
// }