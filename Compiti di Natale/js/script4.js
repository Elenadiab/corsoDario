let button1 = document.getElementById("elButtonMoltiplica");
let button2 = document.getElementById("elButtonDividi");

let valore1 = document.getElementById("elValore1");
let valore2 = document.getElementById("elValore2");



let moltiplicazione = document.getElementById("elMoltiplica");
let divisione = document.getElementById("elDividi");

let casellaValore1 = valore1.value ;
let casellaValore2 = valore2.value;


button1.addEventListener("click", function() {
    let casellaValore1 = valore1.value ;
    let casellaValore2 = valore2.value;
    let moltiplica = casellaValore1 * casellaValore2;
    moltiplicazione.innerHTML = moltiplica;
    


})

button2.addEventListener("click", function (){
    let casellaValore1 = valore1.value ;
    let casellaValore2 = valore2.value;
    let dividi = casellaValore1 / casellaValore2;
    divisione.innerHTML = dividi ;

})

