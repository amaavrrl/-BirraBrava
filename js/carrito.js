import { productos } from "./stock.js";

let carritoCompras = [];

let carritoTamanio = 0;
const totalCarrito = document.createElement("p");

let botonVaciar = document.createElement("button");
const botonFinalizar = document.createElement("button");

const mostrarProductos = async () => {
  //Uso de fetch para llamar a los productos:

  const response = await fetch("./data.json");
  const productos = await response.json();

  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<div class="card text-center text-bg-light " style="width: 18rem;" >
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.desc}</p>
                                <p class="card-text">Precio: $ ${producto.precio}</p>
                                <button class="btn btn-warning btn-lg agregar" id=boton${producto.id}>Añadir a carrito</button>
                            </div>
                        </div>`;

    contenedorProductos.appendChild(div);

    let boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      actualizarCarrito (producto.id);
      carritoCompras.push(producto);
      carritoTamanio = carritoCompras.length;
      console.log("Tengo en el carrito: ", carritoTamanio);
      document.getElementById("contador-carrito").textContent = carritoTamanio;

      //total carrito
      let sumaTotal = carritoCompras.reduce((acc, el) => acc + el.precio, 0);
      totalCarrito.textContent = `Total: $${sumaTotal}`;

      montoTotal.appendChild(totalCarrito);

      //para que aparezca botón de vaciar carrito una vez que el carrito tenga algún producto:

      //para que aparezca botón de finalizar y de vaciar carrito una vez que el carrito tenga algún producto:
      if (carritoTamanio == 1) {
        botonVaciar.classList.add("btn");
        botonVaciar.classList.add("btn-secondary");
        botonVaciar.textContent = "Vaciar carrito";

        botonFinalizar.classList.add("btn");
        botonFinalizar.classList.add("btn-warning");
        botonFinalizar.textContent = "Finalizar compra!";

        vaciar.appendChild(botonVaciar);
        finalizar.appendChild(botonFinalizar);
      } else if (carritoTamanio == 0) {
        // eliminar
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Has agregado ${producto.nombre} al carrito`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  });
};
  

  function actualizarCarrito (productoId) {
  const contenedorCarrito = document.getElementById("carrito-contenedor");

  function renderProductoCarrito ()  {
    let producto = productos.find((producto) => producto.id == productoId);
    //carritoCompras.push(producto)

    producto.cantidad = 1;

    let div = document.createElement("div");

    div.classList.add("productoEnCarrito");

    div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button class="boton-eliminar" id="eliminar${producto.id}"><i class="fa-solid fa-trash-can"></i></button>
            `;
    contenedorCarrito.appendChild(div);
    
    
  };
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras))
  renderProductoCarrito();
};





// vaciar carrito

function vaciarCarrito() {
  let vaciarCarritoBtn = document.getElementById("vaciar");
  vaciarCarritoBtn.addEventListener("click", function () {
    carritoCompras = [];
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El carrito se vacío correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(carritoCompras.length);

    //eliminar el local storage cuando vacian carrito:
     localStorage.clear();
 
   
  });

}

//Me traigo del local storage si hay procutos en el local storage
let carritoLS = JSON.parse(localStorage.getItem('carritoCompras'))

if (carritoLS) {
    carritoCompras = carritoLS
    
    console.log("FUNCIONA")
}




vaciarCarrito();
mostrarProductos();



