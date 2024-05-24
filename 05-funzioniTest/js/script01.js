//dichiaro una funzione

function saluta(){
    //corpo della funzione
    //nome e cognome sono variabili locali
    let nome = "Elena";
    let cognome = "Soave";
    console.log("Ciao " + nome + " " + cognome);

}

//Richiamo la funzione per farla eseguire

saluta();
saluta(); //la scrive ogni volta che la richiami


// la variabile nome non esiste, infatti non stampa nulla
// console.log(nome);

let nomeCorso = "T P P Web 2024";
function salutaStudente(){

    let studente = "Paolo Carinola"
    console.log("Ciao " + studente + ": corso " + nomeCorso);

}

salutaStudente();


// Le variabili locali hanno la precedenza

let respoCorso = "Tina Ponte";

function salutaRespo(){
    let respoCorso = "Egle Risola";
    console.log("Ciao " + respoCorso)
}


salutaRespo(); //saluta Egle perchè la variabile locale, cioè dentro la funzione, ha la precedenza

console.log("Ciao da fuori : " + respoCorso);

