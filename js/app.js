import { productos } from "./stock.js";
import { carrito } from "./carrito.js";
import { carritoCompras } from "./carrito.js";

let carritoTamanio = 0;

const mostrarProductos = (productos) => {
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

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      carrito(producto.id);
      carritoCompras.push(producto);
      carritoTamanio = carritoCompras.length;
      console.log(carritoTamanio);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Has agregado ${producto.nombre} al carrito`,
        showConfirmButton: false,
        timer: 1500
      })
    });
  });
};

const guardar = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

for (const producto of productos) {
  guardar(producto.id, JSON.stringify (producto));
}

localStorage.setItem("productos", JSON.stringify(productos));

console.log(carritoTamanio);

document.getElementById("contador-carrito").textContent = carritoTamanio;

mostrarProductos(productos);
