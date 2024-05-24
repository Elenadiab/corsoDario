// Ciclo FOR

for(let i = 0; i < 10; i++) {
    console.log(i + " Giro");
}

for(let i = 0; i < 10; i++ ) {
    console.log(i + 1 + " Giro");
}

for(let i = 1; i < 10; i++ ) {
    console.log("Giro " + i);
}

//Vado al contrario

for(let i = 10; i > 0; i--){
    console.log("Giro " + i);
}


// Calcola la somma delle oretotali di un girno

console.log("Sommole ore di un giorno");
let oreTotali = 0;

for(let i = 0; i <= 24; i ++){
    let oraAttuale = i;
    oreTotali += oraAttuale;
}

console.log(oreTotali);