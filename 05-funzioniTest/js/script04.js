function calcolaArea(base,altezza){
    let area = base * altezza;

    console.log("L'area vale : " + area);
    return area;

}

function calcolaVolume(base,altezza,profondita){
    let superficie = calcolaArea(base,altezza);
    let volume = superficie * profondita;

    console.log("Il volume vale : " + volume);

    return volume;

}

calcolaVolume(4,7,9);

let volume = calcolaVolume(3,4,6);
console.log(volume);

let area = calcolaArea(9,5);

//funzione du call back
function calcolaVolume2(area,profondita){
    let volume = area*profondita;

    console.log("Il volume calcolato vale : " + volume);

}

calcolaVolume2(calcolaArea(5,8),5);

