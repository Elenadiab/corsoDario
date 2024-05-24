let btn = document.querySelector("#btn");



                  /// funzione anonima ///
btn.addEventListener("click",function(){
    console.log(event);
    console.log(event.target);
    console.log(event.timeStamp);

    let demo = document.querySelector("#demo");
    demo.innerHTML = "Sto cliccando  sul pulsante!"

});

let inScrivi = document.querySelector("#inScrivi");


inScrivi.addEventListener("input", function(){
    console.log(event);

    demo.innerHTML = "stai digitando il tasto" + event.data
})


inScrivi.addEventListener("keydown", function(){
    console.log(event);
    console.log("stai premendo il tasto " + event.key);
});



let btnCalc = document.querySelector("#btnCalc");

function calcola(num1,num2){
    let prodotto = num1 * num2;
    return "Il prodotto vale: " + prodotto;
}


btnCalc.addEventListener("click", function(){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let risultato = calcola(num1,num2);

    document.querySelector("#feed").textContent = risultato;
})


let num2 = document.querySelector("#num2");

num2.addEventListener("keydown", function(){

    if(event.key == "Enter"){
        btnCalc.click();
        event.stopImmediatePropagation();

    }

});























