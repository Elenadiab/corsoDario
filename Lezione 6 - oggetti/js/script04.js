let elenco = [
    {
        nome: "Anna",
        cognome : "Bianchi",
        presenza: true,

        setPresenza(){
            this.presenza = !this.presenza;
        }
    },

    {
        nome: "Pippo",
        cognome : "Rossi",
        presenza: true,

        setPresenza(){
            this.presenza = !this.presenza;
        }
    },

    {
        nome: "Laura",
        cognome : "Verdi",
        presenza: true,

        setPresenza(){
            this.presenza = !this.presenza;
        }
    }
]




let listaStudenti = document.getElementById("listaStudenti");



for(let i= 0; i < elenco.length; i++) {
    listaStudenti.innerHTML += `<li> 
    ${elenco[i].nome} ${elenco[i].cognome} - presente : ${elenco[i].presenza}  
    
    </li>`

}

