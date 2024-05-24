let annoDiNascita = document.getElementById("elAnnoDiNascita");
let annoCorrente = document.getElementById("elAnnoCorrente");
let eta = document.getElementById("elEta");
let button = document.getElementById("elButton");

 
let casellaAnnoNascita = annoDiNascita.value ;
let casellaAnnoCorrente = annoCorrente.value;



button.addEventListener("click", function() {
    let casellaAnnoNascita = annoDiNascita.value ;
    let casellaAnnoCorrente = annoCorrente.value;
    let calcoloEta = casellaAnnoCorrente - casellaAnnoNascita;
    eta.innerHTML = calcoloEta

    
})






