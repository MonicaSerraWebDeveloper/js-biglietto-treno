// Chiediamo all'utente il numero di km (prompt numerico)
const userKm = parseInt (prompt('Quanti km devi fare?'));

// Chiediamo all'utente la sua età (prompt numerico)
const userAge = parseInt (prompt('Quanti anni hai?'));

// Calcolo matematico in base ai km (0.21 * km)
const priceTrip = userKm * 0.21;

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

// Stampiamo nella pagina HTML il prezzo finale con due decimali
const messageTotalPrice = `Il prezzo del tuo biglietto è: €${priceTotalTwoDecimal}`;

document.getElementById('total-price').innerHTML = messageTotalPrice;

// AGGIUNTA EXTRA

// Avviso all'utente dello sconto o solo benvenuto
let titleTicket = 'Benvenut* in carrozza';

if (userAge < 18) {
    titleTicket = 'Hai uno sconto del 20%'
} else if (userAge >= 65) {
    titleTicket = 'Hai uno sconto del 40%'
};

document.getElementById('discount-title').innerHTML = titleTicket;

// Info solo a chi ha lo sconto del prezzo normale sbarrato

let textBeforeRegularPrice = '';

if (userAge < 18 || userAge >= 65) {
    textBeforeRegularPrice = 'Prezzo normale: '
};

let oldPrice = '';

if (userAge < 18 || userAge >= 65) {
    oldPrice = `€${priceTrip}`
};

document.getElementById('text-before-old-price').innerHTML = textBeforeRegularPrice;
document.getElementById('old-price').innerHTML = oldPrice;
