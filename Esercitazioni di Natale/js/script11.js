let persona = {
    nome:"Elena",
    cognome:"Soave",
    eta:45,
    corso:"TPPW2024",
    
    materie: [
        "javascript", "react", "angular", "typescript"
    ],


    descriviTeStesso(){
        let materie = "";
        for(let i = 0; i < materie.length; i++){
            materie += "<li>" + this.materie[i]+ "</li>";
        }

        let descrizione = `${this.nome} ${this.cognome} anni: ${this.eta} corso: ${this.corso} ${materie}`;

            return descrizione;


    }
}

let demo = document.getElementById("demo");

console.log(persona.descriviTeStesso());
demo.innerHTML = persona.descriviTeStesso();

