
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
let precioactualBuzos = 3000;
let costoenvioBuzos = 500;

function btnBuzos_onclick() {
    const stockDisponible = validarQuiebre(stockactualBuzos, 1); 
    if(stockDisponible===true) {
        stockactualBuzos = actualizarStock(stockactualBuzos, 1)
        console.log(`añadido Buzos a ${precioactualBuzos} mas ${costoenvioBuzos} de envío y queda stock ${stockactualBuzos}`);
    } else{
        console.log(`No disponible`);
    }    
}

//-------------------------PANTALONES---------------------------------------//

let stockactualPantalones = 15;
let precioactualPantalones = 5000;
let costoenvioPantalones = 500;

function btnPantalones_onclick() {
    const stockDisponible = validarQuiebre(stockactualPantalones, 1); 
    if(stockDisponible===true) {
        stockactualPantalones = actualizarStock(stockactualPantalones, 1)
        console.log(`añadido Pantalones a ${precioactualPantalones} mas ${costoenvioPantalones} de envío y queda stock ${stockactualPantalones}`);
    } else{
        console.log(`No disponible`);
    }    
}