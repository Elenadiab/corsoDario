//definisco con notazione letterale il mio oggetto

let user = {

    //definisco alcune proprieta
    nome: "Elena", 
    cognome: "Soave",
    eta: 45,
    citta: "Torino",
    status: "online",
    accesso: true,

    //definisco un metodo (una funzionaliata)
    doLogin: function(){
        this.status = "online";

        console.log("Il tuo status attuale è : " + this.status);
    },

    doLogout:function(){
        this.status = "offline";
        console.log("Il tuo status attuale è : " + this.status);
        
    }


}


//richiamo delle proprietà
let descrizione = "User : " +  user.nome + " " + user.cognome + " " + "Status: " + user.status

console.log(descrizione);

user.doLogout();




let admin = {
    nome: "Pippo",
    cognome:"Rossi",
    status:"online",
    computer:{
        nome:"Dell",
        modello:"Vostro 1125",
        softwares: ["Vsc", "Photoshop", "Eclipse", "Android", "Postman"]
    },

    gestisciUtente(utente){
        return "Sto gestendo l'utente " + utente;
    }
}

//recupero le proprieta di admin e poi lacio il metodo gestisci utente

let descrizioneAdmin = `Admin: ${admin.nome} ${admin.cognome}. Pc in uso ${admin.computer.nome} ${admin.computer.modello}. Software installati ${admin.computer.softwares}`

console.log(descrizioneAdmin);

console.log(admin.gestisciUtente("Anna"));

console.log(admin.gestisciUtente(user));




