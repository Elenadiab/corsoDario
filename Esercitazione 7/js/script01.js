/* function Contatto(nome,cognome,email,telefono){
    this.nome = nome,
    this.cognome = cognome,
    this.email = email,
    this.telefono = telefono
}

function aggiungiContatto(){
   let nome = document.getElementById("nome")
   let cognome = document.getElementById("cognome")
   let email = document.getElementById("email")
   let telefono = documet.getElementById("telefono")

   return `${nome} <br> ${cognome} <br> ${email} <br> ${telefono}`

   let 
   
   

}

console.log(aggiungiContatto()); */

//// SOLUZIONE /////
let feed = document.getElementById("feed")
let demo = document.getElementById("demo")
let listaUtenti = [];

function Utente(nome,cognome,email,telefono){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.telefono = telefono;

}


function aggiungiContatto(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value;
    




    if(nome == "" || cognome == "" || email == "" || telefono == ""){
        feed.innerHTML = "Compila tutti i dati per favore";
        if(nome ==""){
            feed.innerHTML += "<li>nome</li>";
        }
        if(cognome ==""){
            feed.innerHTML += "<li>cognome</li>";}
        if(email ==""){
            feed.innerHTML += "<li>email</li>";}
        if(telefono ==""){
             feed.innerHTML += "<li>telefono</li>";}
    }else{

    


    let utente = new Utente(nome,cognome,email,telefono);
    listaUtenti.push(utente);
        feed.innerHTML = "Utente aggiunto!"

        demo.innerHTML = "";
        for(let i = 0; i < listaUtenti.length; i++){
            demo.innerHTML += creaCard(listaUtenti[i]);




        }
             
}
    console.log(listaUtenti);
    



/* -------------------------------------------------------------------------- */
/*                               CANCELLA CAMPI                               */
/* -------------------------------------------------------------------------- */
    
/* document.getElementById("nome").value = ""
document.getElementById("cognome").value = ""
document.getElementById("email").value = ""
document.getElementById("telefono").value = "" */

pulisciCampi()


}





/**
 * 
 * @param {Utente} utente 
 */

function creaCard(utente){
    let card = `<div class= "boxUser">
        <p>${utente.nome} ${utente.cognome}<p>
        <p>${utente.email}<p>
        <p>${utente.telefono}<p>`
        return card;
}




/* -------------------------------------------------------------------------- */
/*                         FUNZIONE PER PULIRE I CAMPI                        */
/* -------------------------------------------------------------------------- */



function pulisciCampi(){
    document.getElementById("nome").value = ""
    document.getElementById("cognome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telefono").value = ""
}


   
















