let demoArea = document.getElementById("demoArea");
let demoVolume = document.getElementById("demoVolume");

let valProfondita = document.getElementById("valProfondita");



function calcolaArea(valBase,valAltezza){
    let area = valBase * valAltezza;
    return area;
}

function calcolaVolume(valBase,valAltezza,valProfondita){
    let volume = valBase * valAltezza * valProfondita;
    return volume;
}

function testArea(){
    let valBase = document.getElementById("valBase").value;
    let valAltezza = document.getElementById("valAltezza").value;
    
    
    
    demoArea.innerHTML = calcolaArea(valBase,valAltezza);
}

function testVolume(){
    let valBase = document.getElementById("valBase").value;
    let valAltezza = document.getElementById("valAltezza").value;
    let valProfondita  = document.getElementById("valProfondita").value;

    demoVolume.innerHTML = calcolaVolume(valBase,valAltezza,valProfondita);
}


