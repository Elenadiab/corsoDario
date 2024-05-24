let miaStringa = "Il martedi pomeriggio facciamo lezione in aula 5";

let lunghezzaStringa = miaStringa.length; 


console.log(lunghezzaStringa);
console.log(miaStringa.charAt(0));

console.log(miaStringa.charAt(miaStringa.length - 1));

/* metodi ricerca */
console.log(miaStringa.indexOf("martedi"));
console.log(miaStringa.indexOf("a"));

console.log(miaStringa.indexOf("o f"));

console.log(miaStringa.includes("martedi")); //true


//metodi per il taglio 
let frase = "javascript è utilizzato in ambito front-end";

console.log(frase.slice(4,15));
console.log(frase.slice(10));

////
let frase2 = "ciao come stai?";
console.log(frase2[0]);
console.log(frase2.slice(1));

console.log(frase2.slice(1) + frase2[0]);

//// metodi  split() e jooin()

console.log(frase2.split(" "));

let fraseInArray = frase2.split(" ");

let fraseString = fraseInArray.join(" ");
console.log(fraseString);

let frase3 = "i topi non avevano nipoti";
console.log(frase3.split(" ").reverse().join(" "))


//REG EX

const miaReg = /("([A-Z])\w")/;

const regexCodFiscale = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;

let miaCodFiscale = "svolne78b60a944p"

if (miaCodFiscale.match(regexCodFiscale)){
    console.log("cod fiscale valido")
}else{
    console.log("cod fiscale non valido");
}

























