









function Film (titolo,locandina,attori,regista,durata,prezzo){
    this.titolo= titolo;
    this.locandina= locandina;
    this.attori=attori;
    this.regista=regista;
    this.durata=durata;
    this.prezzo=prezzo;        

}



let films = [
    new Film("Everything Everywhere All at Once",
            "https://pad.mymovies.it/filmclub/2022/03/243/locandinapg1.jpg",
            ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu", "Jamie Lee Curtis" ],
            "Daniel Kwan",
            "115 minuti", 
            "€ 25"
            ),

    new Film("Avatar - La via dell'acqua",
            "https://pad.mymovies.it/filmclub/2010/10/203/locandinapg1.jpg",
            ["Cliff Curtis", "Edie Falco" ,"Kate Winslet"],
            "Rick Jaffa ",
            "127 minuti",
            "€ 27"
            ),
    
    new Film("Gli spiriti dell'isola",
            "https://pad.mymovies.it/filmclub/2022/07/081/locandinapg1.jpg",
            ["Colin Farrell","Brendan Gleeson","Kerry Condon", "Barry Keoghan"],
            "Martin McDonagh",
            "149 minuti",
            "€ 22"
            ),
            
    new Film("Elvis",
            "https://pad.mymovies.it/filmclub/2019/08/035/locandina.jpg",
            ["Austin Butler","Chaydon Jay","Tom Hanks"],
            "Baz Luhrmann",
            "150 minuti", 
            "€ 35"
            ),   

    new Film("Niente di nuovo sul fronte occidentale",
            "https://pad.mymovies.it/filmclub/2022/09/024/locandina.jpg",
            ["Austin Butler","Chaydon Jay","Tom Hanks"],
            "Edward Berger",
            "155 minuti", 
            "€ 30"
            )         
                 
        ];




let titoloFilm = document.querySelector("#titoloFilm");
let locandinaFilm= document.querySelector("#locandinaFilm");
let attoriFilm=document.querySelector("#attoriFilm");
let registaFilm = document.querySelector("#registaFilm");
let prezzoFilm= document.querySelector("#prezzoFilm");

let btnIndietro = document.querySelector("#btnIndietro");
let btnAvanti= document.querySelector("#btnAvanti");



let indiceFilm = 0;

function mostraFilm(){
        let filmCorrente = films[indiceFilm];

        titoloFilm.textContent = filmCorrente.titolo;

        locandinaFilm.setAttribute("src", filmCorrente.locandina);

        attoriFilm.textContent = "";

        for(let i =0; i < filmCorrente.attori.length; i++){
                attoriFilm.innerHTML += `<li> ${filmCorrente.attori[i]} </li>`
        }


        registaFilm.textContent = "Regista : " + filmCorrente.regista;

        durataFilm.textContent = "Durata : " + filmCorrente.durata;

        prezzoFilm.textContent = "Prezzo : " + filmCorrente.prezzo;


}

mostraFilm();

btnAvanti.onclick = function(){
        
        // modulo (resto della divisione)
        // indiceFilm = (indiceFilm + 1) % films.length;
        
        indiceFilm++;
        if (indiceFilm == films.length){
                indiceFilm = 0;
        }

        mostraFilm();
}


btnIndietro.onclick = function(){

        // indiceFilm = (films.length + (indiceFilm - 1)) % films.length;

        if(indiceFilm == 0){
                indiceFilm == films.length -1
        }else{
                indiceFilm--;
        }

        indiceFilm--;
        mostraFilm();
}














