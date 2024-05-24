let formReg = document.querySelector("#formReg");

let feed = document.querySelector("#feed");
let demo = document.querySelector("#demo");




function controllaDati(){
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;


    if(username == "" || username.length < 8 || password == "" || password.length < 8){
        feed.innerHTML = "Mi spiace, qualcosa non va"
        event.preventDefault();
    }else{
        
            demo.innerHTML = "Tutto ok, sei autorizzato"
        
    }
}


formReg.addEventListener("submit", controllaDati);