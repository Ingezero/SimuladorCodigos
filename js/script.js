/*
Este es un creador de codigo para productos que ingresan a un inventario.
-Luis Castro-
*/
let cLog = console.log;
let identificadorProducto;
let cantProductos;
let vRam = 0;
let vSsd = 0;
let vUsb = 0;
let varComun = 0;
let arrayComponentes = [];

//Obtiene referencia del boton que debe ser presionado
const btnGenDatos = document.getElementById("btnCrearEtiquetas");

// Evento generador de codigos al presionar el boton crear
btnGenDatos.addEventListener("click", () => {
    identificadorProducto = document.getElementById("tipoProd").value;
    cantProductos = parseInt(document.getElementById("numeProd").value);
    genEtiquetas();
})

//Funcion principal que genera todo los codigos
function genEtiquetas() {
    switch (identificadorProducto) {
        case 'RAM':
            varComun = vRam;
            etiquetasGen(cantProductos, identificadorProducto, varComun);
            vRam = vRam + cantProductos; /*Agrega ya en suma dependiendo de cuantos existan ya creados*/
            break;
        case 'SSD':
            varComun = vSsd;
            etiquetasGen(cantProductos, identificadorProducto, varComun);
            vSsd = vSsd + cantProductos; /*Agrega ya en suma dependiendo de cuantos existan ya creados*/
            break;
        case 'USB':
            varComun = vUsb;
            etiquetasGen(cantProductos, identificadorProducto, varComun);
            vUsb = vUsb + cantProductos; /*Agrega ya en suma dependiendo de cuantos existan ya creados*/
            break;
        default:
            alert('Tipo de producto incorrecto, intenta nuevamente');
    }
}

/*Proceso etiquetador. Se usa el mismo sin importar el producto*/
function etiquetasGen(a, b, c) {
    arrayComponentes = [];
    for (i = 1 + c; i <= a + c; i++) {
        arrayComponentes.push({
            producto: b + '000' + (i)
        });
    }
    
    //Obtiene el elemento donde imprimira las etiquetas generadas
    let productosPrint = document.querySelector("#productosAgregados")
    
    /*Imprime los datos generados dentro del array*/
    for (let i = 0; i < arrayComponentes.length; i++) {
        productosPrint.innerHTML += arrayComponentes[i].producto;
        productosPrint.innerHTML += "<br>";
    };
}