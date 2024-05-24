let valArea = document.getElementById("valArea");


function calcolaArea(base,altezza){
    let area = base*altezza;
    return area;


}

function testArea(){
    let base = document.getElementById("valBase").value;
    let altezza = document.getElementById("valAltezza").value;

    valArea.innerHTML = calcolaArea(base,altezza);


}


