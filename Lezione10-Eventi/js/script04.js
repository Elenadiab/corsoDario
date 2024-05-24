let formUser = document.querySelector("#formUser");

let feed = document.querySelector("#feed");

let campoInputNome = document.querySelector("#nome");

let campoInputCognome = document.querySelector("#cognome");

let campoInputCap = document.querySelector("#cap");




function checkNome(){
    if(campoInputNome.value.length < 5){
        campoInputNome.setAttribute("class","borderRed");
    }else{
        campoInputNome.classList.remove("borderRed");
        campoInputNome.classList.add("borderGreen");

    }


}


function checkCognome(){
    if(campoInputCognome.value.length < 5){
        campoInputCognome.setAttribute("class","borderRed");
    }else{
        campoInputCognome.classList.remove("borderRed");
        campoInputCognome.classList.add("borderGreen");

    }
}



function checkCap(){
    let regexCap = /^[0-9]{5}/;
    if(campoInputCap.value.match(regexCap)){
        campoInputCap.classList.add("borderGreen");
        campoInputCap.classList.remove("borderRed");
    
    }else{
        campoInputCap.classList.add("borderRed");
        campoInputCap.classList.remove("borderGreen");
    }
}



campoInputNome.addEventListener("input", checkNome);
campoInputCognome.addEventListener("input",checkCognome);
campoInputCap.addEventListener("input",checkCap);


function validate(){
    let inputs = document.querySelectorAll("#formUser input");

    inputs.forEach(input =>{
        if(input.classList.contains("borderRed") || input.classList.length == 0){
            feed.innerHTML = "stai sbagliando qualcosa, controlla i campi in rosso"
            event.defaultPrevented();
            event.stopPropagation();
        }
    }
        )

}


formUser.addEventListener("submit", validate);