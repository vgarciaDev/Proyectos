const prev = document.getElementById("anterior");
const next = document.getElementById("siguiente");
const numeros = document.querySelectorAll(".circulo");
const progreso  = document.getElementById("progreso");

let contador = 1;

next.addEventListener("click", ()=>{
    contador++;
    if(contador === 2){
        prev.classList.remove("boton-prev")
        prev.classList.add("boton-next");
        
        const barra = document.createElement("div");
        barra.classList.add("progreso-relleno");
        progreso.appendChild(barra);

        numeros[1].classList.add("activo");
    } else if(contador === 3){
        const barra = document.createElement("div");
        barra.classList.add("progreso-relleno");
        barra.style.width="70%";
        progreso.appendChild(barra);
        numeros[2].classList.add("activo");
    } else if(contador === 4){
        const barra = document.createElement("div");
        barra.classList.add("progreso-relleno");
        barra.style.width="100%";
        progreso.appendChild(barra);
        next.classList.remove("boton-next");
        next.classList.add("boton-prev");
        numeros[3].classList.add("activo");
    } else if(contador>4){
        contador = 4;
    }
    console.log(contador);
})

prev.addEventListener("click", ()=>{
    contador--;
    if(contador === 3){
        numeros[3].classList.remove("activo");

        progreso.removeChild(progreso.lastChild);

        next.classList.remove("boton-prev");
        next.classList.add("boton-next");
    } else if (contador === 2){
        numeros[2].classList.remove("activo");

        progreso.removeChild(progreso.lastChild);
    } else if (contador === 1){
        numeros[1].classList.remove("activo");

        progreso.removeChild(progreso.lastChild);

        prev.classList.remove("boton-next")
        prev.classList.add("boton-prev");
    } else if(contador<1){
        contador = 1;
    }
    console.log(contador);
})
