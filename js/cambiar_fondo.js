const botonFondo = document.getElementById("cambiarFondo")
const body = document.getElementsByTagName("body")[0]

botonFondo.addEventListener("click",cambiarFondo)

function cambiarFondo(){
    if(body.classList == "")
        {body.classList.add("fondoclass");}
    else{
        body.classList.remove("fondoclass");
    }
   
    
    
}