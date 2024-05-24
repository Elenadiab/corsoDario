
let elListaSpettacoli = document.querySelector("#elListaSpettacoli")
const ENDPOINT = "http://localhost:3000/spettacoli"

let spettacoliSala = [];
let idLocal = [];


fetch(ENDPOINT)
.then(data =>{
    return data.json();
})

.then(response =>{
   spettacoliSala = response

   spettacoliSala.forEach(spettacolo => {
    creaCardSpettacolo(spettacolo)





        
    });




})

function creaCardSpettacolo(spettacolo){
    let div = document.createElement("div")
    div.setAttribute("class","card m-3")
    div.setAttribute("style","width: 18rem;")
    

    let img = document.createElement("img")
    img.setAttribute("class","card-img-top p-3")
    img.setAttribute("src",spettacolo.locandina)

    let divBody = document.createElement("div")
    divBody.setAttribute("class","card-body")

    let h5 = document.createElement("h5")
    h5.setAttribute("class","card-title")

    let pDurata = document.createElement("p")
    pDurata.setAttribute("class","card-text")

    let pPrezzo = document.createElement("p")
    pPrezzo.setAttribute("class","card-text")

    let btnCart = document.createElement("btn")
    btnCart.setAttribute("class","btn btn-primary")
    btnCart.textContent = "Acquista"


// pulsantini

   let btnOp1 = document.createElement("btn")
   btnOp1.setAttribute("data-id",1)
   btnOp1.setAttribute("class","btn btn-primary")
   btnOp1.setAttribute("style","--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;")
   btnOp1.textContent = "20.30-Sala 1"

   let btnOp2 = document.createElement("btn")
   btnOp2.setAttribute("data-id",2)
   btnOp2.setAttribute("class","btn btn-primary")
   btnOp2.setAttribute("style","--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;")
   btnOp2.textContent = "21.00-Sala 2"

   let btnOp3 = document.createElement("btn")
   btnOp3.setAttribute("data-id",3)
   btnOp3.setAttribute("class","btn btn-primary")
   btnOp3.setAttribute("style","--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;")
   btnOp3.textContent = "23.00-Sala 1"

   divBody.appendChild(btnOp1)
   divBody.appendChild(btnOp2)
   divBody.appendChild(btnOp3)



// fine pulsantini   


    h5.textContent = spettacolo.titolo
    pDurata.textContent = "Durata: " + spettacolo.durata + " min" 
    pPrezzo.textContent = "Prezzo: " + spettacolo.prezzo 

    elListaSpettacoli.appendChild(div)
    div.appendChild(img)
    div.appendChild(divBody)
    divBody.appendChild(h5)
    divBody.appendChild(pDurata)
    divBody.appendChild(pPrezzo)
    divBody.appendChild(btnCart)



   

   btnCart.addEventListener("click",function(){
    let id = spettacolo.id
    idLocal.push(id)
    let idLocalJson = JSON.stringify(idLocal)
    localStorage.setItem("idFilm",idLocalJson)



   })

}











