let nomeUtente = prompt("Inserisci il tuo nome");
if (nomeUtente != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + nomeUtente + "! How are you today?";
  }