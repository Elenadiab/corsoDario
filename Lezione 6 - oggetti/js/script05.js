function Item(descrizione){
    this.descrizione = descrizione;

    this.stampa = function(){
        return this.descrizione;
    }
}


let listaItem = document.getElementById("listaItem");

let miaLista = [];


function inserisci(){
    let item = document.getElementById("item").value ;

    let mioItem = new Item(item);

    miaLista.push(mioItem);

    for(let  i=0 ; i<miaLista.length; i++){
        listaItem.innerHTML += miaLista[i].stampa()
    }
}