// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.



// Creiamo due div in HTML e inseriamo un testo per verifica
// Inseriamo al primo div una classe che dà colore rosso al testo
// Inseriamo al secondo div una classe che dà colore verde al testo

const listOfNumbers = [23, 4, 98, 102, 3, 55, 78]; // Scriviamo un array con una lista di numeri casuali
console.log(listOfNumbers);

let allTheNumbers = 0;

for (let i = 0; i < listOfNumbers.length; i++) {
    allTheNumbers = listOfNumbers[i];

    if (allTheNumbers % 2 === 0) {
        console.log(allTheNumbers);
    }

}
// Verifichiamo quale numero, scorrendo l'intera lista, è pari e quale è dispari
// Scriviamo i numeri dispari e li inseriamo nel div con il testo rosso
// Scriviamo i numeri pari nel div con il testo verde