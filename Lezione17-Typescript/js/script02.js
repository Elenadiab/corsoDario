var Amministratore = /** @class */ (function () {
    //metodo costruttore che viene chiamato nel momento in cui faccio New Amministratore
    function Amministratore(nome, cognome, eta, accessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.accessi = accessi;
    }
    Amministratore.prototype.presenta = function () {
        return "Sono: ".concat(this.nome, " ").concat(this.cognome);
    };
    Amministratore.prototype.setAccessi = function (accessi) {
        this.accessi = accessi;
    };
    Amministratore.prototype.getAccessi = function (password) {
        if (password == "123456") {
            return this.accessi;
        }
        else {
            return "Non puoi accedere";
        }
    };
    return Amministratore;
}());
var admin = new Amministratore("Jacopo", "Bianchi", 34, ["Aula 1", "Aula 2", "Aula 8"]);
console.log(admin.presenta());
admin.setAccessi(["Aula 3", "Aula 8", "Aula 7"]);
console.log("I miei accessi sono: ".concat(admin.getAccessi("234"))); //mettendo la password sbagliata ti nega l accesso
var Impiegato = /** @class */ (function () {
    function Impiegato(nome, cognome, stipendio) {
        this.nome = nome;
        this.cognome = cognome;
        this.stipendio = stipendio;
    }
    Impiegato.prototype.setStipendio = function (valore, password) {
        if (password == "abcd") {
            this.stipendio = valore;
        }
        else {
            return "Non hai la password di vedere lo stipendio";
        }
    };
    return Impiegato;
}());
var imp1 = new Impiegato("Marianna", "Piatto", 0);
imp1.setStipendio(3500, "abcd"); // con la password giusta ti fa accedere allo stipendio
console.log(imp1);
