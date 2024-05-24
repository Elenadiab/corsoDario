let mioArray = ["bianco", "giallo", "verde", "rosso", "blu", "rosa","nero"];

localStorage.setItem("elencoColori", JSON.stringify(mioArray));

console.log(JSON.parse(localStorage.getItem("elencoColori")));



function Studente(nome,cognome,matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
}


let elencoStudenti = [
    new Studente("dario", "mennillo", 1),
    new Studente("elena","soave",2),
    new Studente("giacomo", "rossi",3)
];

localStorage.setItem("elencoStudenti",JSON.stringify(elencoStudenti));

let mieiStudenti = JSON.parse(localStorage.getItem("elencoStudenti"));
console.log(mieiStudenti);


for(let i = 0; i < mieiStudenti.lenght; i++){
    console.log(mieiStudenti[i]);
}

