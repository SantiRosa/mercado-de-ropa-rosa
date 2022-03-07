function carritouno(remeras, precioItem=0, disponibilidad, compra, envio) {
const stockDisponible = validarQuiebre(disponibilidad, compra) ;
if(stockDisponible) {
    console.log(`añadido ${remeras} a ${precioItem} mas ${envio} de envío`);
    } else{
        console.log(`No disponible`);
    }
}

function validarQuiebre(disponibilidad, compra) {
    if(disponibilidad > compra) {
        return true;
    } else{
        return false;
    }
}
carritouno(`remera`, 1500, 50, 10, 500);

function carritodos(Buzos, precioItem=0, disponibilidad, compra, envio) {
    const stockDisponible = validarQuiebre(disponibilidad, compra) ;
    if(stockDisponible) {
        console.log(`añadido ${Buzos} a ${precioItem} mas ${envio} de envío`);
        } else{
            console.log(`No disponible`);
        }
    }
    
    function validarQuiebre(disponibilidad, compra) {
        if(disponibilidad > compra) {
            return true;
        } else{
            return false;
        }
    }

    carritodos(`buzos`, 3000, 80, 20, 500);

    function carritotres(pantalones, precioItem=0, disponibilidad, compra, envio) {
        const stockDisponible = validarQuiebre(disponibilidad, compra) ;
        if(stockDisponible) {
            console.log(`añadido ${pantalones} a ${precioItem} mas ${envio} de envío`);
            } else{
                console.log(`No disponible`);
            }
        }
        
        function validarQuiebre(disponibilidad, compra) {
            if(disponibilidad > compra) {
                return true;
            } else{
                return false;
            }
        }

carritotres(`pantalones`, 6000, 80, 20, 500)

