let parolaDelGiorno = "Palla";
let parolaDelGiornoArray = parolaDelGiorno.split("");

localStorage.setItem("Parola", parolaDelGiornoArray);

console.log(parolaDelGiornoArray[1]);

 





function inserisciParola() {
    
    let parolaInserita = document.querySelector("#word").value;
    
    
    let parolaInseritaArray = parolaInserita.split("");

    let divGriglia = document.querySelector("#griglia");

    let createDiv = document.createElement("div");
    createDiv.className = "rowParola";
    divGriglia.appendChild(createDiv);
    
    for (let i=0; i< parolaInseritaArray.length; i++){
        

        let createDivChild = document.createElement("div");
        createDivChild.className = "boxlett";

        
        createDiv.appendChild(createDivChild);
        createDivChild.textContent = parolaInseritaArray[i];
 
    }
    
 
    for (let i=0; i< parolaDelGiornoArray.length; i++){

        if (parolaDelGiornoArray.includes(parolaInseritaArray[i])) {
            let createDivChild = document.createElement("div");
            createDivChild.classList.add("bgYellow");
        }
    } 

}





