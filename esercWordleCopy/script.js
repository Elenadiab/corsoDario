let grigliaDiv = document.querySelector("#griglia")
let feed = document.querySelector("#feed");
let btnIns = document.querySelector("#btnIns");
let parolaDelGiorno = "palla";
let parole = 0;

localStorage.setItem("Parola", parolaDelGiorno);

function inserisciParola(){
    let parola = document.querySelector("#word").value;
    
    let parolaDelGiornoArr = parolaDelGiorno.split("");
    let parolaInseritaArr = parola.split("");
    // Creazione dell'elemento div con classe "rowParola"
    if (parolaInseritaArr.length == 5){
        
        var rowParolaDiv = document.createElement('div');
        rowParolaDiv.className = 'rowParola';
        // Creazione di 5 elementi div con classe "boxlett" e inserimento all'interno di "rowParolaDiv"
        for (var i = 0; i < parolaInseritaArr.length; i++) {
            var boxlettDiv = document.createElement('div');
            boxlettDiv.className = 'boxlett';
            boxlettDiv.textContent = parolaInseritaArr[i];
            rowParolaDiv.appendChild(boxlettDiv);
            if (parolaInseritaArr[i] === parolaDelGiornoArr[i]){
                boxlettDiv.classList.add("bgGreen");
            }else if(parolaDelGiornoArr.includes(parolaInseritaArr[i])){
                boxlettDiv.classList.add("bgYellow")
            }
        }
        // Inserimento di "rowParolaDiv" all'interno di "grigliaDiv"
        grigliaDiv.appendChild(rowParolaDiv);

        parole++
        checkWinner(parola, parolaDelGiorno, parole);
        parola.value = "";
    }else{
        feed.innerHTML = "Inserisci una parola di 5 lettere"
    }
}


function checkWinner(parola, parolaDelGiorno, parole){
    console.log(parola);
    if(parole < 6){
        if (parola == parolaDelGiorno){
            feed.innerHTML = "Bravo, hai vinto!"
            document.querySelector("#word").setAttribute("disabled", true);
            btnIns.setAttribute("disabled", true);
        }
    }else{
        feed.innerHTML = "MI SPIACE, HAI PERSO";
        document.querySelector("#word").setAttribute("disabled", true);
        btnIns.setAttribute("disabled", true);
    }
}

btnIns.addEventListener("click", inserisciParola);