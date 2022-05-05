/*
Este es un creador de codigo para productos que ingresan a un inventario.
-Luis Castro-
*/
let prodTipo = "";
let prodModelo = "";
let prodDescripcion = "";
let prodPrecio = 0;
let arrayComponentes = [];
let intruder = false;
let placeJ = "";
const agregarProductos = document.getElementById("productosAgregados");

//Recuperar sesion anterior
function renovarDatos() {
    if (JSON.parse(localStorage.getItem("arrayComponentesBck")) === null) {} else {
        arrayComponentes = JSON.parse(localStorage.getItem("arrayComponentesBck"));
        crearTodo();
    }
}
renovarDatos();

//Obtiene datos desde el Array guardado en local storage y aplica un filter para remover el item
function deleteCard() {
    arrayComponentes = JSON.parse(localStorage.getItem("arrayComponentesBck"));
    let filtrarBorrar = arrayComponentes.filter((producto) => producto.id != placeJ);
    localStorage.setItem("arrayComponentesBck", JSON.stringify(filtrarBorrar));
    arrayComponentes = filtrarBorrar;
    renovarDatos();
    Swal.fire({
        position: 'top-center',
        icon: 'failure',
        title: 'El producto fue eliminado correctamente',
        showConfirmButton: false,
        timer: 1500,
        showCloseButton: false
    })
}


//Obtiene referencia del boton que debe ser presionado
const btnGenDatos = document.getElementById("btnCrearCard");

// Evento generador de codigos al presionar el boton crear
btnGenDatos.addEventListener("click", () => {
    if (document.getElementById("prodTipo").value == "img/porDefinir.png") {
        alert("Selecciona un componente valido")
    } else {
        agregarProductos.textContent = "";
        prodTipo = document.getElementById("prodTipo").value;
        prodModelo = document.getElementById("prodModelo").value;
        prodDescripcion = document.getElementById("prodDescripcion").value;
        prodPrecio = document.getElementById("prodPrecio").value;
        genEtiquetas(prodTipo, prodModelo, prodDescripcion, prodPrecio);
    }
})

//Agrega al array de Productos el elemento
function genEtiquetas(a, b, c, d) {
    if (JSON.parse(localStorage.getItem("arrayComponentesBck")) === null) {} else {
        arrayComponentes = JSON.parse(localStorage.getItem("arrayComponentesBck"));
    }
    arrayComponentes.push({
        id: `componente${arrayComponentes.length + 1}`,
        modelo: b,
        descripcion: c,
        precio: d,
        ubicacion: a
    });
    crearTodo();
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto fue añadido de forma exitosa',
        showConfirmButton: false,
        timer: 2500,
        showCloseButton: true
    })
    Toastify({
        text: `Actualmente hay ${arrayComponentes.length} articulos en inventario`,
        duration: 3500
    }).showToast();
}

//Iniciar creador de cards para mostrar pproductos

function crearTodo() {
    agregarProductos.textContent = "";
    arrayComponentes.forEach((producto) => {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", `${producto.id}`);
        tarjeta.innerHTML = `<img src=${producto.ubicacion} class="card-img-top" alt=${producto.modelo}>
    <div class="card-body">
      <h5 class="card-title">${producto.modelo}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">${producto.precio}</p>
      <button class="btn btn-primary" onclick="deleteCard()">Eliminar</button>
    </div>`;
        agregarProductos.appendChild(tarjeta);
        placeJ = producto.id;
        //Guardar actual array para evitar se pierda en recarga
        if (intruder == false) {
            localStorage.setItem("arrayComponentesBck", JSON.stringify(arrayComponentes));
        } else {
            intruder = true;
        }
    });
}

//  Codigo para la obtencion de datos desde un fetch local relacionados a base de datos con antiguos productos.
const btnViejos = document.getElementById("btnViejos");

btnViejos.addEventListener("click", () => {
    fetch('js/data.json')
        .then((response) => response.json())
        .then((data) => {
            arrayComponentes = data
            intruder = true;
            crearTodo();
            intruder = false;

        })
})

const btnLimpiar = document.getElementById("btnLimpiar");

btnLimpiar.addEventListener("click", () => {
    agregarProductos.textContent = "";
    arrayComponentes = JSON.parse(localStorage.getItem("arrayComponentesBck")); //Reestablece los datos anteriormente almacenados en localstorage
})