/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function contaVocali(stringa) {
  let numeroVocali = 0;
  let stringaMinuscola = stringa.toLowerCase();
  for (i = 0; i < stringa.length; i++) {
    if (
      stringa[i] === "a" ||
      stringa[i] === "e" ||
      stringa[i] === "i" ||
      stringa[i] === "o" ||
      stringa[i] === "u"
    ) {
      numeroVocali++;
    }
  }
  return numeroVocali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
