let automobile = {
    marca:"Audi",
    modello:"RS6",
    cilindrata: "2600 TDI",
    colore: "nero opaco",
    stripLed: true,
    trasmissione : "automatica",

    marciaAttuale: 0,
    accesa: false,
    numGiri: 0,
    velocita: 0,



    descriviAuto(){
        let descrizione = `${this.marca} ${this.modello} - Cilindrata: ${this.cilindrata} - Colore ${this.colore} - Trasmissione ${this.trasmissione} - Strip Led ${this.stripLed}`;
        return descrizione;



    }, 


    calcolaVelocita(numGiri,marciaAttuale){
        this.numGiri = numGiri;
        this.marciaAttuale  = marciaAttuale;

        let velocita = this.numGiri * this.marciaAttuale / 100;
        return velocita;

    },

    guidaAuto(){
        this.accesa = true;

        console.log("L'auto è accesa: " + this.accesa);

        let velAttuale = this.calcolaVelocita(3500,6);
        console.log("La tua velocita attuale è : " + velAttuale);

        return "L'auto è accesa: " + this.accesa + " " + "la tua velocita è :" + velAttuale  + "Km/orari";

    }


}

console.log(automobile.descriviAuto());


//questo metodo scrive direttamente in consolle
automobile.guidaAuto();

let demo = document.getElementById("demo");

function guidaAuto(){
    demo.innerHTML = automobile.descriviAuto();
}

