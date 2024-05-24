//definisco proprieta e metodi "comuni" a qualsiasi altro oggetto o classe che implementera l interfaccia 

interface Dipendente{
    nome: string
    cognome: string
    matricola: number

    calcolaStipendio: () => number // metodo che non restituisce nulla 
    
}


//  Utilizzando "implements" eredio obbligatoriamente proprieta e metodi dell interfaccia
class AmministratoreDelegato implements  Dipendente {
    nome: string;
    cognome: string;;
    matricola: number;

    constructor(nome:string,cognome:string,matricola:number){
        this.nome = nome
        this.cognome = cognome
        this.matricola = matricola

    }


    calcolaStipendio(): number{
        let stipendio: number = 1000 * 4
        return stipendio
    }



}


class Manager implements Dipendente {
    nome: string;
    cognome: string;
    matricola: number;


    constructor(nome:string,cognome:string,matricola:number){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }

    calcolaStipendio(): number{
        let stipendio: number = 1000* 2 + 0.5;
        return stipendio

    }
}



let amm1 = new AmministratoreDelegato("Laura","Galli",1,)
console.log(amm1.calcolaStipendio());

let man1 = new Manager("Andrea","Ciani",6)
console.log(man1.calcolaStipendio());

