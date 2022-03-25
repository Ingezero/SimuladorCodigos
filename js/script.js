/*
Este es un creador de codigo para productos que ingresan a un inventario.
-Luis Castro-
*/
let cLog = console.log;
let identificadorProducto;
let cantProductos;
let arranque = prompt('¿Quieres agregar productos? Escribe Si o No').toUpperCase();
let vRam = 0;
let vSsd = 0;
let vUsb = 0;
let varComun = 0;
let arrayComponentes = [];

/*Proceso de obtencion de datos al tipo de producto a agregar y cuantos de ellos*/
while (arranque != 'NO') {
    switch (arranque) {
        case 'SI':
            identificadorProducto = prompt('Inserta el tipo de producto a añadir de los siguientes: RAM, SSD, USB').toUpperCase();
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
            arranque = prompt('¿Quieres agregar productos? Escribe Si o No').toUpperCase();
            break;
    }
}

//Obtiene el elemento donde imprimira las etiquetas generadas
let productosPrint = document.querySelector("#productosAgregados")

/*Imprime los datos generados dentro del array*/
for (let i = 0; i < arrayComponentes.length; i++) {
    productosPrint.innerHTML += arrayComponentes[i].producto;
    productosPrint.innerHTML += "<br>";    
}

let finalDiv = document.createElement("div");
finalDiv.innerHTML = "<h2>Aqui terminan los codigos generados</h2>";
finalDiv.className = "tituloAlto1";
document.body.append(finalDiv);

/*Proceso etiquetador. Se usa el mismo sin importar el producto*/
function etiquetasGen(a, b, c) {
    for (i = 1; i <= a; i++) {
        arrayComponentes.push({producto: b + '000' + (i + c)});
    }
    arranque = prompt('¿Algo mas por agregar? Escribe Si o No').toUpperCase();
}