let usuario;

let usuarioStorage = localStorage.getItem ("usuario")

if (usuarioStorage){
    let usuario = usuarioStorage;
    let mensaje = `Bienvenid@, ${usuario}`;
    alert(mensaje);
}else{
    usuario = prompt("Ingrese su nombre");
    localStorage.setItem("usuario", usuario)
}
