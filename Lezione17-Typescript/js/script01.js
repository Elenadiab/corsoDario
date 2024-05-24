// Tipi Primitivi: Number, String, boolean
var numero = 9; //Qui non dichiaro il tipo
console.log(numero);
//Dichiaro una variabile
var mioNome = "Dario";
var mioCognome;
mioCognome = "Mennillo";
var miaEta = 34;
var presenza = true;
var info = "ciao mi chiamo" + mioNome + " " + mioCognome + "e ho " + miaEta + " anni";
console.log(info);
var mieiHobbies = ["pallavolo", "libri", "musica", "cinema"];
mieiHobbies.forEach(function (hobby) {
    console.log(hobby);
});
var arrayNumeri = [2, 4, 15, 23];
var qualcosa = "ciao";
qualcosa = 7;
qualcosa = true;
qualcosa = ["ciao", "buongiorno", "notte", "arrivederci"];
qualcosa = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34
};
//Object
var persona = {
    nome: "Dario",
    cognome: "Mennillo",
    id: 0
};
// let docente: object = {}
var docenti;
docenti = [
    {
        nome: "davide",
        cognome: "ghione",
        corso: "tppw",
        matricola: 1
    }
];
var respoCorso;
respoCorso = {
    nome: "Egle",
    cognome: "Risola",
    corso: ["TPPW", "TSS", "TSR"]
};
function presentaDocente(docente) {
    console.log("Mi chiamo: " + docente.nome + " e insegno " + docente.corso);
}
var docenteJS;
docenteJS = {
    nome: "Pippo",
    corso: "colori chiari"
};
presentaDocente(docenteJS);
