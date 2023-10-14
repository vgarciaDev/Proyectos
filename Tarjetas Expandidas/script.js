const tarjeta = document.querySelectorAll('.tarjeta');

function quitarClaseActiva(){
    for(let i = 0; i<tarjeta.length; i++){
        tarjeta[i].classList.remove("active")
    }
}

for(let i = 0; i<tarjeta.length; i++){
    tarjeta[i].addEventListener("click", ()=> {
        quitarClaseActiva();
        tarjeta[i].classList.add("active");
    })
}
