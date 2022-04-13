/*
Este es un creador de codigo para productos que ingresan a un inventario.
-Luis Castro-
*/
let prodTipo = "";
let prodModelo = "";
let prodDescripcion = "";
let prodPrecio = 0;
let arrayComponentes = [];

//Recuperar sesion anterior
function renovarDatos(){
    if (JSON.parse(localStorage.getItem("arrayComponentesBck")) === null){
        
    }else{
        arrayComponentes = JSON.parse(localStorage.getItem("arrayComponentesBck"));
        crearTodo();
    }
}
renovarDatos();

//Obtiene referencia del boton que debe ser presionado
const btnGenDatos = document.getElementById("btnCrearCard");

// Evento generador de codigos al presionar el boton crear
btnGenDatos.addEventListener("click", () => {
    prodTipo = document.getElementById("prodTipo").value;
    prodModelo = document.getElementById("prodModelo").value;
    prodDescripcion = document.getElementById("prodDescripcion").value;
    prodPrecio = document.getElementById("prodPrecio").value;
    genEtiquetas(prodTipo, prodModelo, prodDescripcion, prodPrecio);
})

//Agrega al array de Productos el elemento
function genEtiquetas(a, b, c, d) {
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
        text: `Actualmente hay ${arrayComponentes.length} articulos en inventario`, duration: 3500
    }).showToast();
}

//Iniciar creador de cards para mostrar pproductos
function crearTodo(){
const agregarProductos = document.getElementById("productosAgregados");
agregarProductos.textContent="";
arrayComponentes.forEach((producto) => {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", `${producto.id}`);
    tarjeta.innerHTML=`<img src=${producto.ubicacion} class="card-img-top" alt=${producto.modelo}>
    <div class="card-body">
      <h5 class="card-title">${producto.modelo}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-primary">Seleccionar</a>
    </div>`;
    agregarProductos.appendChild(tarjeta);
    //Guardar actual array para evitar se pierda en recarga
    localStorage.setItem("arrayComponentesBck", JSON.stringify(arrayComponentes));
});
}
