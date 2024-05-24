const check = document.getElementById("check")
const btn = document.getElementById("button")
const msg = document.getElementById("msg")

check.addEventListener('click', function() {
    if(check.checked) {
      btn.disabled = false;
      msg.innerText = '(aceptado)';
    } else {
       btn.disabled = true
       msg.innerText = ' ';
    }
  });








    
    
    
