let numeri = [3,18,25,37,102];

let numeroPiuGrandeAttuale = 0;

for(let i=0; i < numeri.length ; i++){
    if (numeri[i] > numeroPiuGrandeAttuale) {
        numeroPiuGrandeAttuale  = numeri[i];

    }
}


console.log("il numero piu alto è " + numeroPiuGrandeAttuale);


    