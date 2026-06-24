document.addEventListener("DOMContentLoaded", function(){
    const boton = document.getElementById("boton jiji");

    boton.addEventListener("click", function(){
        alert("La has liado");
    });

    const imagenes = [
        "images/Realismo ej1.jpg",
        "images/realismo ej 2.jpg",
        "images/realismo ej 3.jpg"
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("imagenPrincipal");
    const btnAnterior = document.getElementById("btnAnterior");
    const btnSiguiente = document.getElementById("btnSiguiente");

    function mostrarImagen(indice){
        imagenPrincipal.src = imagenes[indice];
    }

    btnSiguiente.addEventListener("click", function(){
        indiceActual++;
        if(indiceActual >= imagenes.length) indiceActual = 0;
        mostrarImagen(indiceActual);
    });

    btnAnterior.addEventListener("click", function(){
        indiceActual--;
        if(indiceActual < 0) indiceActual = imagenes.length -1;
        mostrarImagen(indiceActual);
    });

    mostrarImagen(indiceActual);

});