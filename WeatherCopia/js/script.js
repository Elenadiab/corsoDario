// let citta = "Melizzano";
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=b542efe3dcddbd27283ebf045c4e1ca6`)
//     .then(data => {
//         return data.json()
//     })
//     .then(response => {
//         console.log(response);
//     })


let citta = document.querySelector("#citta")
let temperatura = document.querySelector("#temperatura")
let icona = document.querySelector("#icona")
let umidita = document.querySelector("#umidita")
let wind = document.querySelector("#vento")
let descrizione = document.querySelector("#descrizione")

let btn = document.querySelector("#invia")
let inputCitta = document.querySelector("#inputCitta")

let fotoCitta = document.querySelector("#sezPrevisione")



function recuperaCitta(){
    let inputCittaValue = inputCitta.value
    let ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${inputCittaValue}&appid=5313635839d354b25578f03256a5bb54`
    fetch(ENDPOINT)
    .then(data =>{
        return data.json()
    })
    .then(response =>{
        stampaDati(response)
    })
}


function stampaDati(response){
    citta.textContent = response.name;
    
    temperaturaCelsius = (Number(response.main.temp) - 273.15).toFixed(0)
    temperatura.textContent = "Temperatura: " + temperaturaCelsius + "°C"
    umidita.textContent = "Umidità: " + response.main.humidity + "%"
    icona.setAttribute('src',`http://openweathermap.org/img/w/${response.weather[0].icon}.png`)

    wind.textContent = "Vento: " + response.wind.speed + "Km/h"
    descrizione.textContent = response.weather[0].description 

    recuperaFotoCitta()

    


}

function recuperaFotoCitta(){
    let inputCittaValue = inputCitta.value
    
    
    // fotoCitta.style.backgroundImage = url(`https://source.unsplash.com/1920x1080/?${inputCittaValue}`)
    fotoCitta.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${inputCittaValue})`;

}


function creaCard(){
    

}



btn.addEventListener("click",recuperaCitta)