// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// Creiamo due div in HTML e inseriamo un testo per verifica
// Inseriamo al primo div una classe che dà colore rosso al testo
// Inseriamo al secondo div una classe che dà colore verde al testo

const arrayLength = 20;

const listOfNumbers = []; // Scriviamo un array con una lista di numeri casuali

for (let x = 0; x < arrayLength; x++) {
    let randomNumberList = Math.floor(Math.random() * 100);
    listOfNumbers.push(randomNumberList);
}

let allTheNumbers = 0;

for (let i = 0; i < listOfNumbers.length; i++) {
    allTheNumbers = listOfNumbers[i];
    
    const addList = document.createElement('li');
    addList.innerHTML = allTheNumbers;
    if (allTheNumbers % 2 === 0) {
        document.querySelector('.even-number').append(addList);
    } else {
        document.querySelector('.odd-number').append(addList);
    }
}
// Verifichiamo quale numero, scorrendo l'intera lista, è pari e quale è dispari
// Scriviamo i numeri dispari e li inseriamo nel div con il testo rosso
// Scriviamo i numeri pari nel div con il testo verde