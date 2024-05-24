let lato1 = 5;
let lato2 = 6;
let lato3 = 7;

let perimetro = lato1+lato2+lato3;
let semiperimetro = perimetro/2;

let area = Math.sqrt(semiperimetro * (semiperimetro - lato1) * (semiperimetro - lato2) * (semiperimetro - lato3));

console.log("Il  perimetro vale " + perimetro);
console.log("L'area vale " + area )


//A=√[p(p-a)(p-b)(p-c)]