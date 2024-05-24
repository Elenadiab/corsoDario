let demo = document.querySelector("#demo");
let btn = document.querySelector("#btn");
let nomeInput = document.querySelector("#nome");
let idInput = document.querySelector("#id");

const ENDPOINT = "http://localhost:3000/studenti"

fetch(ENDPOINT)
    .then(data => {
        return data.json();
    })
    .then(response => {
        response.forEach(studente => {
            demo.innerHTML += `<li> ${studente.id} - ${studente.nome} </li>`
        });
    })

btn.addEventListener("click", function () {
    let nome = nomeInput.value
    let id = idInput.value
    let studente = new Studente(nome, id)

    fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(studente)
    }).then(data => {
        return data.json();
    })

})

function Studente(nome, id) {
    this.nome = nome
    this.id = id
}

// inserire un form per inserire un nuovo utente.. usa il tag form e il metodo
// post

