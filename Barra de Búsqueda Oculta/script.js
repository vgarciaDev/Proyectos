const boton = document.querySelector(".boton");
const campo = document.getElementById("campo");
const busqueda = document.getElementById("iconoBusqueda");
const cerrar = document.getElementById("iconoCerrar");

let condicional = true;

boton.addEventListener("click", ()=>{
    campo.classList.toggle("activo");
    if(condicional === true){
        boton.appendChild(cerrar);
        boton.removeChild(busqueda);
        cerrar.innerHTML="close";
        condicional = false;
    } else if (condicional === false){
        boton.appendChild(busqueda);
        boton.removeChild(cerrar);
        condicional = true;
    }
})
