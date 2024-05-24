let persona = {
    nome: "Elena", 
    cognome: "Soave",
    eta: 45,
    corso: "Tecnico Produzione Pagine Web",
    materie: ["Javascipt", "Html", "Css"],

    descriviTeStesso(){
        let materie = ""
        for (let i = 0; i< this.materie.length; i++){
            materie+= this.materie[i] + " ";
        }

        let descrizione = `Mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni. Frequento il corso  ${this.corso} le materie:  ${materie}` ;


        return descrizione;

}


}

let demo = document.getElementById("demo");
demo.innerHTML = persona.descriviTeStesso();

let prof1 = {
    nome: "Dario",
    cognome: "Mennillo",
    materia: "Javascript",

    descriviProf1(){
        let descrizione = `il prof. ${this.nome} insegna ${this.materia}`
        return descrizione;
    }
}

let prof2 = {
    nome: "Davide",
    cognome: "Ghione",
    materia: "Html e Css",

    descriviProf2(){
        let descrizione = `il prof. ${this.nome} insegna ${this.materia}`
        return descrizione;

    }
}

let demoDocenti = document.getElementById("demoDocenti");
let demoDocenti2 = document.getElementById("demoDocenti2");


function stampaDocenti(){
demoDocenti.innerHTML = prof1.descriviProf1();
demoDocenti2.innerHTML = prof2.descriviProf2();
}
