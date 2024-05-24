function salutaPersona(nome){
    // nome qui è un parametro
    console.log("Ciao " + nome);

}

salutaPersona("Dario");

let nome = "Paolo";
salutaPersona(nome);

// let nomeUtente = window.prompt("Come ti chiami ? ");
//salutaPersona(nomeUtente);

salutaPersona(["Anna", "Dario","Sam" ]);

function calcolaArea(base,altezza){
    let area = base * altezza ;

    console.log("L'area vale : " + area);

}

calcolaArea(2,9);

function calcolaVolume(base,altezza,profondita){
    let volume = base * altezza * profondita;

    console.log("Il volume vale : " + volume);


}

calcolaArea(3,4);
calcolaVolume(5,6,9);
