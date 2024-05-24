
/* RELOJ Y FECHA */
function updateClock(){
    let now= new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes  < 10 ? "0" + minutes : minutes;
    seconds = seconds  < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" +seconds;
    document.getElementById("hora").innerHTML = timeString;


}

setInterval(updateClock,1000);
updateClock();

/* DIAS DE LAS SEMANA  */

let diasDeSemana= ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let dia = new Date().getDay();
let month = new Date().getMonth()
let numeroFechaMes = new Date().getDate()

function mostrarDia(){

    
     

     for (let diaHoy in diasDeSemana){
        if(diaHoy == dia){
            resultadoDia = diasDeSemana[diaHoy];
        }
     }

   
    for(mesHoy in meses){
        if(mesHoy==month){
            
        resultadoMes =meses[mesHoy];
        
        }
    }

}

mostrarDia();


document.getElementById("diaSemana").innerHTML =  resultadoDia +" "+ numeroFechaMes+ " "+ resultadoMes