// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let userNumber = parseInt(prompt('Scrivi un numero')); // Chiediamo un numero 

if (userNumber % 2 === 0) { // Verifichiamo se il numero in questione è pari
    console.log(userNumber) // Se è pari stampiamo il numero in console
} else {
    userNumber++; // Se non è pari aggiungiamo + 1 per renderlo pari 
    console.log(userNumber) // Stampiamo il numero con + 1 in console
}
 