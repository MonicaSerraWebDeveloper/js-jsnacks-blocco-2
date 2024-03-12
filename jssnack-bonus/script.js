// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const fourFiguresNumber = prompt('Scrivi un numero di 4 cifre'); // Chiediamo un numero di 4 cifre 

let sum = 0;

for (let i = 0; i < fourFiguresNumber.length; i++) { // Prendiamo in considerazione le singole cifre
    const stringToNumber = parseInt(fourFiguresNumber[i]);
    sum += stringToNumber; // Sommiamo le cifre l'una con l'altra
}

console.log(sum);

