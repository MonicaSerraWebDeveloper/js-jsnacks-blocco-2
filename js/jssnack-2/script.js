// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('Scrivi una parola'); // Chiediamo due parole con due prompt
const secondWord = prompt("Scrivi un'altra parola");

console.log(firstWord.length);
console.log(secondWord.length);

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (secondWord.length > firstWord.length) {
    console.log(firstWord, secondWord);
} else {
    console.log(firstWord, secondWord);
}

// Verifichiamo se una è più corta dell'altra
// Se una è più corta dell'altra allora la stampiamo davanti
// Se hanno stessa lunghezza le stampiamo nell'ordine che c'è stato dato
