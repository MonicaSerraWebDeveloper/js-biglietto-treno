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
const userAge = parseInt (prompt('Quanti anni hai?'));
console.log(userAge);

// Calcolo matematico in base ai km (0.21 * km)
const priceTrip = userKm * 0.21;
console.log(priceTrip);

// Calcolo della percentuale del 20%
const discountTwenty = (priceTrip * 20) / 100;

// Applying the discount 20% to the price trip
const applyDiscountTwenty = priceTrip - discountTwenty; 

// Calcolo della percentuale del 40%
const discountForthy = (priceTrip * 40) / 100;

// Applying the discount 40% to the price trip
const applyDiscountForthy = priceTrip - discountForthy;

// Definizione della condizione per le percentuali in base all'età
let priceTicketTotal = priceTrip

if (userAge < 18) {
    priceTicketTotal = applyDiscountTwenty
} else if (userAge >= 65) {
    priceTicketTotal = applyDiscountForthy
};

// Prezzo totale del biglietto finale con massimo due decimali
let priceTotalTwoDecimal = parseFloat (priceTicketTotal.toFixed(2));
console.log(priceTotalTwoDecimal);

// Stampiamo nella pagina HTML il prezzo finale con due decimali
const messageTotalPrice = `Il prezzo del tuo biglietto è: € ${priceTotalTwoDecimal}`;

document.getElementById('total-price').innerHTML = messageTotalPrice;

