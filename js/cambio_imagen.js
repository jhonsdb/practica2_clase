const  img = document.getElementById("imagen")

img.addEventListener("mousemove",cambiarImagen)

function cambiarImagen (){
    if(img.src != "imagenes/perfiluno.jpeg"){
        img.src= "imagenes/perfiluno.jpeg"
    }else{
        alert("se ha roto")
    }
}

img.addEventListener("mouseout",cambiarImagenDos)

function cambiarImagenDos(){
    if(img.src != "imagenes/perfildos.jpeg"){
        img.src= "imagenes/perfildos.jpeg"
    }
}


