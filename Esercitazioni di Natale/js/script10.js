let automobile = {
    marca:"Audi",
    modello:"RS3",
    cilindrata:"2.000TDI",

    marciaAttuale: 0,
    numGiri: 0,
    velocita: 0,
    accesa: false,


    descriviAuto(){
        let descrizione = `${this.marca} ${this.modello} ${this.cilindrata}`
        return descrizione;
    },


    calcolaVelocita(marciaAttuale,numGiri){
        let velocita = marciaAttuale*numGiri/100;
        return velocita;
    },


    guidaAuto(){
        this.accesa = true;
        let velocitaAttuale = this.calcolaVelocita(3,3400);

        return "L'auto è  accesa:" + this.accesa + " La tua velocità è di " + velocitaAttuale + " Km/h"

    }



}

let demo = document.getElementById("demo");

console.log(descriviAuto());
console.log(guidaAuto());



function guidaAuto(){
    demo.innerHTML = automobile.descriviAuto() + "<br>" + automobile.guidaAuto();
}

console.log(guidaAuto());