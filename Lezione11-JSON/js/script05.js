//salvo qualcosa nel local storage

// let nomeUser = "Dario";
// localStorage.setItem("user", nomeUser);

// let stausConnesione = "online";
// localStorage.setItem("status", stausConnesione);

// let token = "DarioOnlineDoc24";
// localStorage.setItem("token", token);


let btnLogin = document.querySelector("#btnLogin");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

let btnLogout = document.querySelector("#btnLogout");



// salavare il campi input in local storage
function login(){
    if(username.value != "" && password.value != ""){
    localStorage.setItem("nomeUser", username.value);
    localStorage.setItem("passUser", password.value);
    formLogin.classList.replace("show", "hide");
    formLogout.classList.replace("hide", "show");

}

}


btnLogin.addEventListener("click", login);


function logout (){
    localStorage.clear();
    checkUser();
}

btnLogout.addEventListener("click", logout)

let feed = document.querySelector("#feed");

function checkUser(){
    if(localStorage.length !=0){
        formLogin.classList.replace("hide", "show");
        formLogout.classList.add("show","hide");
        feed.innerHTML = "<h2>bentornato " + localStorage.getItem("nomeUser") + "</h2>";
    }else{
        feed.innerHTML = "<p>nessun utente connesso</p>"
        
    }
}

checkUser();


