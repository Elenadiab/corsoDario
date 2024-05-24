// Tipi Primitivi: Number, String, boolean

let numero = 9; //Qui non dichiaro il tipo
console.log(numero);


//Dichiaro una variabile

let mioNome: string = "Dario";

let mioCognome: string;
mioCognome = "Mennillo";

let miaEta: number = 34;

let presenza: boolean = true;

let info: string = "ciao mi chiamo" + mioNome + " " + mioCognome + "e ho "  + miaEta + " anni";

console.log(info);

let mieiHobbies: string[] = ["pallavolo","libri","musica","cinema"]

mieiHobbies.forEach(hobby =>{
    console.log(hobby);
    
});

let arrayNumeri: number[] = [2,4,15,23]


let qualcosa:any = "ciao"
qualcosa = 7;
qualcosa = true;

qualcosa = ["ciao","buongiorno","notte","arrivederci"];

qualcosa = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34
}


//Object
let persona = {
    nome: "Dario",
    cognome: "Mennillo",
    id: 0
}

// let docente: object = {}

let docenti: {
    nome: string,
    cognome: string,
    corso: string,
    matricola: number
}[]

docenti = [
    {
        nome: "davide",
        cognome: "ghione",
        corso: "tppw",
        matricola: 1

    }

]



let respoCorso: {
    nome: string,
    cognome: string,
    corso: string[]
} 


respoCorso = {
    nome: "Egle",
    cognome: "Risola",
    corso: ["TPPW", "TSS", "TSR"]
}




//Alias o Custom Type
type Docente = {
    nome:  string,
    corso: string
}




function presentaDocente(docente: Docente){
    console.log("Mi chiamo: " + docente.nome + " e insegno " + docente.corso);
    
}

let docenteJS: Docente 

docenteJS = {
    nome:"Pippo",
    corso: "colori chiari"

}



presentaDocente(docenteJS)









