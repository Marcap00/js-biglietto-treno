/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)

- va applicato uno sconto del 20% per i minorenni

- va applicato uno sconto del 40% per gli over 65.

*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*Consigli:

- Fate la scaletta degli step e commentate man mano che scrivete il codice

- Usate i console.log per verificare che tutto sia a posto

- Disattivate live server: può darvi problemi coi prompt.

*Bonus

- Stampare il prezzo finale sulla pagina invece che in console

- Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente

- Abbellire col CSS
 */

/* 
1. Recupero gli elementi dal DOM
2. Definisco le variabili di cui sono a conoscenza: 
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)

    - va applicato uno sconto del 20% per i minorenni

    - va applicato uno sconto del 40% per gli over 65.

3. Chiedo all'utente il numero di chilometri che vuole percorrere
4. Chiedo all'utente l'età del passeggero
5. Calcolo il prezzo totale del viaggio
6. Stampo il messaggio in pagina */

/* Fase preparatoria */
//Recupero l'elemento in pagina
const resultElement = document.getElementById('result');
console.log(resultElement);
// Preparo gli elementi conosciuti
let km = 1;
console.log('km', km);


const discountFirst = 20;
console.log('discountFirst',  discountFirst);

const discountSecond = 40;
console.log('discountSecond', discountSecond);


/* Fase di raccolta dei dati */
// Chiedo all'utente il numero di chilometri che vuole percorrere
km = parseInt(prompt('Inserisci quanti km vuoi percorrere', 30));
console.log('km', km, typeof km);

// Chiedo all'utente l'età del passeggero
const age = parseInt(prompt('Inserisci la tua età', 68));
console.log('age', age, typeof age);

/* Fase di lavorazione dei dati */
// Elaboro lo sconto a seconda dell'età
const priceToKm = parseFloat(0.21 * km).toFixed(2); 
console.log('priceToKm', priceToKm);

const discountMinor = parseFloat((discountFirst * priceToKm)  /  100).toFixed(2);
console.log('discountMinor', discountMinor);

const discountMajor = parseFloat((discountSecond * priceToKm)  /  100).toFixed(2);
console.log('discountMajor', discountMajor);

let  price = priceToKm;

if (age >= 65) {
    price = discountMajor;
} else if (age < 18) {
    price = discountMinor;
}
console.log('price', price);

/* Fase di output */
//Stampo il messaggio
resultElement.innerText = `Il prezzo del tuo biglietto è € ${price}`;
if (age >= 65 || age < 18) {
    resultElement.innerText = `Il prezzo originale era € ${priceToKm}
    Il prezzo scontato del tuo biglietto è € ${price}`;
} 
console.log('price', price);
