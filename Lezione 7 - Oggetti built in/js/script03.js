let oggi = new Date();
console.log(oggi);

let anno = oggi.getFullYear();
let day = oggi.getDay();
let month = oggi.getMonth();
let data = oggi.getDate();

console.log(data + " / " + month + " / " + anno);

let giorni = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "sabato"];

console.log("oggi è : " + giorni[2]);


//Per manipolare le date https://momentjs.com


/* OROLOGIO DIGITALE */

let orologioDigitale = document.getElementById("orologioDigitale");

setInterval(() =>{

let oggi = new Date();
let time = "";
let ora = (oggi.getHours() < 10? '0' : '') + oggi.getHours();
let min = (oggi.getMinutes() < 10? '0' : '') + oggi.getMinutes();
let sec = (oggi.getSeconds() < 10? '0' : '') + oggi.getSeconds();

time = ora + ":" + min + ":" + sec;

orologioDigitale.innerHTML = time;
}, 1000);

