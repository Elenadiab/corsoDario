function Studente(nome,cognome,matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
}


let btnReg = document.querySelector("#btnReg");

function salvaStudente(){
    let studente = new Studente ("Anna", "Rossi", "34")
// trasformo lo studente in un JSOn per poterlo salvare in LocalStorage

let studenteJSON =JSON.stringify(studente);



    localStorage.setItem("nuovoStudente", studenteJSON);
}

btnReg.addEventListener("click", salvaStudente);


let btnRead = document.querySelector("#btnRead");

function leggiStudente(){
    //nel recuperare qualcosa dal LocalStorage ricevo sempre formato sringa
    let studente = localStorage.getItem("nuovoStudente");
    let studenteOBJ = JSON.parse(studente)

    console.log(studenteOBJ);
    console.log(studenteOBJ.nome);
    console.log(studenteOBJ.cognome);
    console.log(studenteOBJ.matricola);
}

btnRead.addEventListener("click", leggiStudente)