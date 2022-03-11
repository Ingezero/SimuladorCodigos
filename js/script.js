/*
Este es un creador de codigo para productos que ingresan a un inventario.
-Luis Castro-
*/
let cLog = console.log;
let identificadorProducto;
let cantProductos;
let arranque = prompt('¿Quieres agregar productos? Escribe Si o No');
let vRam = 0;
let vSsd = 0;
let vUsb = 0;
let varComun = 0;

/*Proceso de obtencion de datos al tipo de producto a agregar y cuantos de ellos*/
while (arranque != 'No') {
    switch (arranque) {
        case 'Si':
            identificadorProducto = prompt('Inserta el tipo de producto a añadir de los siguientes: RAM, SSD, USB');
            cantProductos = parseInt(prompt('¿Cuantos productos se ingresan a inventario?'));
            switch (identificadorProducto) {
                case 'RAM':
                    varComun = vRam;
                    etiquetasGen(cantProductos, identificadorProducto, varComun);
                    vRam = vRam + cantProductos;    /*Agrega ya en suma dependiendo de cuantos existan ya creados*/
                    break;
                case 'SSD':
                    varComun = vSsd;
                    etiquetasGen(cantProductos, identificadorProducto, varComun);
                    vSsd = vSsd + cantProductos;    /*Agrega ya en suma dependiendo de cuantos existan ya creados*/
                    break;
                case 'USB':
                    varComun = vUsb;
                    etiquetasGen(cantProductos, identificadorProducto, varComun);
                    vUsb = vUsb + cantProductos;    /*Agrega ya en suma dependiendo de cuantos existan ya creados*/
                    break;
                default:
                    alert('Tipo de producto incorrecto, intenta nuevamente');
            }
            break;
        default:
            alert('Opcion incorrecta. Intenta nuevamente.')
            arranque = prompt('¿Quieres agregar productos? Escribe Si o No');
            break;
    }
}

/*Simulador de encuesta*/
let respuestaPoll = prompt('¿Desea responder una encuesta? Si o No');
if (respuestaPoll == 'Si') {
    alert('Muchas gracias por tus comentarios');
} else {
    if (respuestaPoll == 'No') {
        alert('Que tengas excelente dia');
    }
}

/*Proceso etiquetador. Se usa el mismo sin importar el producto*/
function etiquetasGen(a, b, c) {
    for (i = 1; i <= a; i++) {
        cLog(b + '000' + (i + c));
    }
    arranque = prompt('¿Algo mas por agregar? Escribe Si o No');
}