let coloriPR = ["Rosso", "Giallo", "Blu", "Rosa", "Verde", "Nero"];
let nomiPR = ["Jason", "Trini", "Billy", "Kimberly", "Tommy", "Zazk"];
let powerRangers = [];

//scorrere elementi array con il ciclo for

for(let i = 0; i < nomiPR.length; i++){
    console.log(i + " " + coloriPR[i] + " - " + nomiPR[i]);

    let powerRanger = nomiPR[i] + " - " + coloriPR[i];
    powerRangers.push(powerRanger);
}

console.log(powerRangers);
