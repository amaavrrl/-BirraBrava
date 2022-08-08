import { productos } from "./stock.js";

let carritoCompras = [];

export const carrito = (productoId) => {
  const contenedorCarrito = document.getElementById("carrito-contenedor");

  const renderProductoCarrito = () => {
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
  renderProductoCarrito();
};

//para que se quede guardado en el localstorage lo que se guardó en carrito pero no funciona
/*
let carritoStorage = JSON.parse(localStorage.getItem("carritoCompras"));

if (carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
}
*/

export { carritoCompras };
