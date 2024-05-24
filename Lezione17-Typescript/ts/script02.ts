class Amministratore {
    nome: string;
    cognome: string;
    eta: number;

    private accessi: string[];


    //metodo costruttore che viene chiamato nel momento in cui faccio New Amministratore
    constructor(nome:string, cognome:string, eta:number, accessi: string[]){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.accessi = accessi;


    }


    presenta(){
        return `Sono: ${this.nome} ${this.cognome}`
    }

    setAccessi(accessi: string[]){
        this.accessi = accessi
    }

    getAccessi(password: string){
        if(password == "123456"){
            return this.accessi;
        }else{
            return "Non puoi accedere"
        }
        
    }

}



let admin = new Amministratore("Jacopo", "Bianchi", 34, ["Aula 1", "Aula 2", "Aula 8"]);

console.log(admin.presenta());
admin.setAccessi(["Aula 3","Aula 8","Aula 7"])
console.log(`I miei accessi sono: ${admin.getAccessi("234")}`); //mettendo la password sbagliata ti nega l accesso


class Impiegato{
    constructor(public nome:string, public cognome:string, private stipendio: number){

    }

    setStipendio(valore: number, password:string){
        if(password == "abcd"){
        this.stipendio = valore
    }else{
        return "Non hai la password di vedere lo stipendio"
    }
    }
}

let imp1 = new Impiegato("Marianna","Piatto", 0);
imp1.setStipendio(3500, "abcd"); // con la password giusta ti fa accedere allo stipendio

console.log(imp1);




