# Richiesta

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

## Raccolta dati

- il numero dei chilometri (via promt)
- quanti anni ha (via promt)

## Dati che abbiamo

- prezzo in base ai km = 0.21 km
- sconto del 20% per i minorenni
- sconto del 40% per gli over 65

## Elaborazione

- calcolo se lo sconto viene applicato
- calcolo il prezzo totale del biglietto in base ai km

## Output

- SE (l'età è minore di 18 togliamo il 20%)
  ALTRIMENTI SE
  (l'età è maggiore di 65 togliamo il 40%)
