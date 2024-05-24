let demo = document.getElementById("demo")


function salutaStudente(){
    let nomeUser = document.getElementById("nomeUser").value;
    let cognomeUser = document.getElementById("cognomeUser").value;
    
    if(nomeUser.trim() == "" && cognomeUser.trim() == ""){
        demo.innerHTML = "Inserisci qualcosa"
    }else if(nomeUser.trim() == ""){
        demo.innerHTML = "Dai dimmi almeno come ti chiami"
    }else if(cognomeUser.trim() == ""){
        demo.innerHTML = "Per favore inserisci anche il tuo cognome"
    }else{
        demo.innerHTML = "Ciao " + nomeUser + " " + cognomeUser;
        document.getElementById("nomeUser").value = "";
        document.getElementById("cognomeUser").value = "";
    }

    console.log("Ciao " + nomeUser);


    //pulisco il campo

}

