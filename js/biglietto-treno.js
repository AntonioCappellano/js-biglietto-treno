/* CHIEDO L'ETA' */

const eta = parseInt(prompt("età del passeggero"));

/* CHIEDO I CHILOMETRI */

const chilometri = parseFloat(prompt("chilometri del passeggero"));

/* PREZZO FISSO PER KM */

const prezzoPerKm = 0.21;

/* PREZZO BASE DEL BIGLIETTO PER KM PERCORSI */

let prezzoTotale = chilometri * prezzoPerKm;

/* ELABORAZIONE */

if (eta < 18) {
  prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100;
} else if (eta > 65) {
  prezzoTotale = prezzoTotale - (prezzoTotale * 40) / 100;
}
