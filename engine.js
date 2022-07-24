alert ("Sei pronto a giocare a morra cinese?");

var NomeGiocatore = window.prompt("Ciao inserisci il tuo nome");

document.getElementById("titolo").innerHTML ="Benvenuto " + NomeGiocatore;

var SceltaUtente;

  function clickCarta() {
    SceltaUtente = "Carta";
    alert (NomeGiocatore + " Hai scelto " + SceltaUtente);
  }

  function clickForbici() {
    SceltaUtente = "Forbici";
    alert (NomeGiocatore + " Hai scelto " + SceltaUtente);
  }

  function clickSasso() {
    SceltaUtente = "Sasso";
    alert (NomeGiocatore + " Hai scelto " + SceltaUtente);
  }

function verdetto(){

  var SceltaComputer;
    if(SceltaUtente == "Carta"){
      SceltaComputer = "Forbici";
    }
    if(SceltaUtente == "Forbici"){
      SceltaComputer = "Sasso";
    }
    if(SceltaUtente == "Sasso"){
      SceltaComputer = "Carta";
    }

  document.getElementById("titolo").innerHTML = NomeGiocatore + " HAI PERSO!";
  document.getElementById("informazioni").innerHTML = "Il computer ha scelto " + SceltaComputer + " Tu hai scelto " + SceltaUtente;
}
