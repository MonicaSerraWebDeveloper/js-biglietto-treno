// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 


// Chiediamo all'utente il numero di km (prompt numerico)
const userKm = parseInt (prompt('Quanti km devi fare?'));
console.log(userKm);

// Chiediamo all'utente la sua età (prompt numerico)
// Calcolo matematico in base ai km (0.21 * km)
// Calcolo della percentuale del 20%
// Calcolo della percentuale del 40%
// Definizione della condizione per le percentuali in base all'età
// Prezzo totale del biglietto finale con massimo due decimali