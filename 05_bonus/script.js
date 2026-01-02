/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Tizio';


// Dichiara la funzione qui.
function saluta(name){
  const data = new Date()
  if (data.getHours()  <= 13){
    console.log(`Buongiorno ${name}!`)
  } else if (data.getHours()  <= 17) {
    console.log(`Buon pomeriggio ${name}!`)
  } else {
     console.log(`Buona sera ${name}!`)
   }
  }


// Invoca la funzione qui e stampa il risultato in console
saluta(name)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.