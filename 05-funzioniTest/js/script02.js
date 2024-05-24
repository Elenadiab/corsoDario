function descriviDocente(){
    let nomeDocente = "Dario Menillo";

    console.log("Docente : " + nomeDocente);
    descriviCorso();
}

function descriviCorso(){
    let nomeCorso = "TPPW-2024";

    console.log("Il corso è : " + nomeCorso);


    salutaRespo();
    //Attenzione : stai creando un loop
    //descriviDocente();
}

function salutaRespo(){
    let nomeRespo = "Egle Risola"

    console.log("Ciao " + nomeRespo);

}


descriviDocente();