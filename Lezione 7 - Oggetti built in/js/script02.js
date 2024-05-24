let num1 = 123;
let num2 = "ciao";
let num3 = "123";

console.log(isNaN(num1)); // isNaN chiede se è un non numero
console.log(isNaN(num2));
console.log(isNaN(num3));

let num4 = "234";
console.log(Number(num4));
console.log(parseInt(num4));


console.log(parseInt("1001101",2)); //trasforma il numero in un numero intero (grz a parseInt) binario (grazie al 2)

console.log(parseInt("1001101,8334")); // toglie la virgola e trasforma in num intero

//// Math
let num5 = -34;
console.log(Math.abs(num5)); //risultato 34

let num6 = 23;
console.log(Math.cos(num6)); //calcola il coseno del num6

console.log(Math.pow(num6,3)); //potenza elevata a 3

// Arrotondamenti
let num7 = 3.2376548;
console.log(Math.round(num7));


console.log(Math.random());
console.log(Math.ceil(Math.random() * 25)); //numero casuale tra 1 e 25










