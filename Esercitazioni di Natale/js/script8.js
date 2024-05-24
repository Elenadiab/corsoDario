let numeriEstratti = []
let contatore = 0;

for (let i = 0; i < 90; i++){
    let nummeroCasuale = Math.ceil(Math.random() * 90);

    if (numeriEstratti.includes(nummeroCasuale)){i --
    
    }else{

        numeriEstratti.push(nummeroCasuale);


    }

    contatore++;

}


console.log(numeriEstratti);
console.log("Numero giri" + contatore);