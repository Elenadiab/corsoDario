/* esercizio 6 parte 2 */


function stampanumeri(){

let numeri =[];

for (let i=1; i < 6; i++){
    numeri.push(i);
}

return numeri;




}

stampanumeri();



/* esercizio 2 parte 2/ */ 

let demo = document.getElementById("demo");
demo.innerHTML = stampanumeri()


function tipoDiDato(argomento){
    let tipo = typeof argomento;
    return tipo;
}

console.log(tipoDiDato("elena"));
console.log(tipoDiDato(5));
console.log(tipoDiDato(true));



/* esercizio 1 parte 2 */

function contaLettere(string,letter){
    let contatore = 0;
    for(let i= 0; i < string.length; i++){
        if (string[i].toLowerCase() === letter.toLowerCase()){
            contatore++;
        }
        
    }

    return contatore;
}

let stringa = "ciao come ti chiami";
let letteraDaCercare = "c";
let risultato = contaLettere(stringa,letteraDaCercare);

console.log("in questa frase ci sono " + risultato + " lettera " + letteraDaCercare);

/* esercizio 3 parte 2 */

function trovaParolaPiuLunga(frase){
    let parole = frase.split(' ');
    let parolaPiuLunga = " ";

    for(let i = 0; i < parole.length ; i++){
        let parolaCorrente = parole[i];
        if(parolaCorrente.length > parole.length){
            parolaPiuLunga = parolaCorrente;
        }
    }

    return parolaPiuLunga;
}


let frase = "mi chiamo massimiliano";

console.log("la parola piu lunga è " + trovaParolaPiuLunga(frase))






















