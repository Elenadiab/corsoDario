function Studente(nome,cognome,matricola){
    this.nome=nome;
    this.cognome=cognome;
    this.matricola=matricola;

    this.descrivi= function(){
        return `${this.nome} ${this.cognome} - matricola ${this.matricola}`
    }



}


let elencoStudenti = [
    new Studente("Elena","Soave",1),
    new Studente("paolo","carinola",2),
    new Studente("anna", "capri",3)
]

elencoStudenti.forEach(studente =>{
    console.log(studente.descrivi());
})
