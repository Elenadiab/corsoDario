
let arrayAttori=[];

function aggiungiAttori(){
    let nuovoAttore = document.querySelector("#attore").value;
    arrayAttori.push(nuovoAttore);

    document.getElementById("attore").value = "";

    
console.log(nuovoAttore);

}












function aggiungiFilm(){
    let titolo = document.querySelector("#titolo").value;
    let locandina = document.querySelector("#locandina").value;
    let regista = document.querySelector("#regista").value;
    let durata = document.querySelector("#durata").value;
    let prezzo = document.querySelector("#prezzo").value;
    let film = new Film (titolo, locandina, arrayAttori, regista, durata, prezzo);
    films.push(film);
    console.log(films);

    arrayAttori=[];


    document.getElementById("titolo").value = "";
    document.getElementById("locandina").value = "";
    document.getElementById("regista").value = "";
    document.getElementById("durata").value = "";
    document.getElementById("prezzo").value = "";


    


}



// function aggiungiAnteprima(){
//         let titolo = document.querySelector("#titoloAnteprima");
//         let locandina = document.querySelector("#locandinaAnteprima");
//         let regista = document.querySelector("#registaAnteprima");
//         let durata = document.querySelector("#durataAnteprima");
//         let prezzo = document.querySelector("prezzoAnteprima");

        



