// Esercizio 1: Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

// Risposta: I principali datatype in JavaScript sono di 6 tipologie:

//string, che rappresenta un serie di caratteri alfanumerici espressi tra apici "" o ''
let string = "Francesco"

//number, che rappresenta un dato numerico (es: 1, 2345 oppure 2,345)
let number = 24

//boolean, cioè valori di tipo logico e può essere solo true o false
let boolean = false

//null che indica una variabile vuota con valore null, che non ha ancora un valore definito
let empty = null

//undefined che invece specifica un tipo di variabile il cui valore non è ancora stato assegnato

// Esercizio 2: Descrivi cos'è un oggetto in JavaScript, con parole tue.
// Risposta: Un oggetto, in JavaScript, è caratterizzato da una variabile con all'interno delle proprietà con un valore ben definito. Una proprietà, a sua volta, può possedere delle proprietà annidate:
let utente = {
	nome: "Francesco",
	cognome: "Rossi",
	indirizzo: {
		via: "Via Verdi",
		numero: 20,
		citta: "Monza"
	}
};

// Esercizio 3: Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20
// Risposta: Una somma, in JavaScript, tra due datatype "number" deve essere specificata utilizzando il simbolo '+' e può essere espressa come segue:
console.log(12 + 20)

// Esercizio 4: Crea una variable di nome "x" e assegna ad essa il numero 12
// Risposta: Per dichiarare una variabile, basta esprimerla come segue:

let x = 12

// Esercizio 5: Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa
// Risposta: Per creare una variabile alfanumerica con un valore string, basterà rinchiuderlo dentro degli apici:
let name = "Francesco"

// Esercizio 6: Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
// Risposta:
let x = 12
console.log(4-x)
console.log(x-4)

// Esercizio 7: Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!). Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa). Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
// Risposta:
let name1 = "john"
let name2 = "John"
let result = name1!==name2;

console.log(result)
console.log(name1.toLowerCase===name2.toLowerCase)