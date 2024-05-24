
//costruttore

function Studente(nome,cognome,matricola){
    this.nome=nome;
    this.cognome=cognome;
    this.matricola=matricola;

}


let elenco = document.getElementById("elenco");
let listaStudenti = [];


// funzione

function aggiungiStudente(){

    let nome =document.getElementById("nome").value ;
    let cognome = document.getElementById("cognome").value ;
    let matricola = Number (document.getElementById("matricola").value); 


    if(nome=="" || cognome == "" || matricola==""){
        alert("Stai dimenticando qualcosa !!")
    }else{

    let studente = new Studente(nome,cognome,matricola);
    listaStudenti.push(studente);
    stampaElenco(listaStudenti);

    
}
        console.log(listaStudenti);

        
}

/**
 * 
 * @param {Studente[]} elencoStudenti 
 */


function stampaElenco(elencoStudenti){
    elenco.innerHTML= ""
    for(let i = 0; i < elencoStudenti.length; i++){
      elenco.innerHTML += `<li> ${elencoStudenti[i].nome} ${elencoStudenti[i].cognome} - matricola ${elencoStudenti[i].matricola} </li>`
    }
}



