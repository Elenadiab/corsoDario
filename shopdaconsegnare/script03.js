let elListaProd = document.querySelector("#elListaProd")
const UrlProducts = "https://dummyjson.com/products"


fetch(UrlProducts)
    .then(data =>{
        return data.json();
    })
    .then(response =>{
        response.products.forEach(prodotto => {
            creaLi(prodotto)
            
        });
    })

let prodottiCarrello = [];



function creaLi(prodotto){
    let li = document.createElement("li")
    let button = document.createElement("button")
    let i = document.createElement("i")

    li.setAttribute("class","list-group-item d-flex justify-content-between align-items-baseline")
    button.setAttribute("class","btn btn-primary")
    i.setAttribute("class","bi bi-cart")

    li.textContent = `${prodotto.brand} - ${prodotto.title} - ${prodotto.price}€`

    elListaProd.appendChild(li);
    li.appendChild(button)
    button.appendChild(i)

    button.addEventListener("click",function(){
        console.log(prodotto);
        prodottiCarrello.push(prodotto);
        caricaCarrello(prodottiCarrello);

    })



}


window.addEventListener("DOMContentLoaded",function(){
    if(this.localStorage.key("listaCarrello") != null){
        prodottiCarrello =  JSON.parse(this.localStorage.getItem("listaCarrello"));
    }
})

/**
 * 
 * @param {Prodotto[]} arrayProdotti 
 */

function caricaCarrello(arrayProdotti){
   
    let listaJSON = JSON.stringify(arrayProdotti);
    localStorage.setItem("listaCarrello",listaJSON);

}





























// fetch(UrlProducts)
// .then(data => {
//     return data.json();
// })
// .then(response =>{
//     console.log(response.products)
    
//         response.products.forEach(product => {
//             creaLi(product)
            
//         });
        
//     })
    
    
    
//     function creaLi(product){

//     let li = document.createElement("li")
//     let button =  document.createElement("button")
//     let i = document.createElement("i")

//     button.setAttribute("class","btn btn-primary")
//     i.setAttribute("class","bi bi-cart")
//     li.setAttribute("class","list-group-item d-flex justify-content-between align-items-baseline")

//     li.textContent = `${product.title} ${product.brand} ${product.price}€`

//     elListaProd.appendChild(li)
//     li.appendChild(button)
//     button.appendChild(i)


//     }



