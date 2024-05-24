let user = {
    nome: "Elena",
    cognome:"Soave",
    citta:"Torino",
    eta: 45,
    accesso:true,
    status:"online",

    accedi: function() {
        this.status = "online";
        this.nome = "elena";
        console.log(this.nome + " sei " + this.status);
    },

    esci: function(){
        this.status = "offline";
        this.nome = "elena";
        console.log(this.nome + " sei " + this.status)
    }
}

user.accedi();
user.esci();

let descrizione = user.nome + " " + user.cognome + " sei " + user.status;

console.log(descrizione);


let admin = {
    nome: "elena",
    cognome: "soave",
    status: "online",

    computer: {
        nome: "dell",
        modello: "microsoft",
        software: ["photoshop", "Vscode", "after effects", "ableton"]

    },

    gestisciUtente: function(utente) {
        return "sto gestendo l'utente " + utente;

    }
    

}

let descrizioneAdmin = `${admin.nome} ${admin.cognome} - Pc in uso ${admin.computer} - i suoi software sono ${admin.computer.software[3]}`;

console.log(descrizioneAdmin);

console.log(admin.gestisciUtente("annalisa"));







