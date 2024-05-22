/* 
-----------
ESERCIZIO 1
----------- 
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
 
// STRING è un DATATYPE che contiene un insieme di valori alfabetici inserito delimitato tra "", '' e ``
let varString1 = "Emanuele";
let varString2 = 'Emanuele';
let varString3 = `Emanuele`;

// NUMBER è un DATATYPE che contiene un insieme di valori numerici, interi o decimali
let varNumber = 44;

// BOOLEAN è un DATATYPE che può contenere solo TRUE o FALSE
let varBoolean = true;

// ARRAY è uno STRUCTURE TYPE che può contenere tutti i valori precedenti, inseriti in una lista non ordinata inserita all'interno di parentesi quadre []. Per quanto un array possa contenere qualsiasi type di dati è consigliabile utilizzare array dello stesso type. 
let varArray = [1, 3, 6, 7, 9]

// NULL è un DATATYPE volutamente NULLO assegnato ad una VARIABILE non ancora DEFINITA. 
let varNull = null; 

// UNDEFINED è un DATATYPE non ancora assegnato ad una VARIABILE. 
let varUndefined1 = undefined;
let varUndefined2;


/* 
-----------
ESERCIZIO 2
-----------
Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// Un OBJECT in JavaScript è uno STRUCTURE TYPE che può contenere coppie di dati CHIAVE : VALORE, che hanno lo scopo di MODELLARE o meglio definire un'entità reale. Può essere rappresentato all'interno di {}
let varObject = {name: "Emanuele", age : 36, isMarried : false};


/*
-----------
ESERCIZIO 3 
-----------
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
const sum = (12 + 20);
console.log(sum);


/*
-----------
ESERCIZIO 4
-----------
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
const x = 12;
console.log(x);


/*
-----------
ESERCIZIO 5
-----------
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const name = "Emanuele";
console.log(name);


/*
-----------
ESERCIZIO 6
-----------
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
const subtract = (4 - x);
console.log(subtract);


/*
-----------
ESERCIZIO 7
-----------
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
const name1 = "john";
const name2 = "John";
const isEqual = (name1 === name2); // name1 è UGUALE a name2 ? FALSE
const isDisequal = (name1 !== name2); // name1 è DIVERSO da name2 ? TRUE
console.log(isEqual);
console.log(isDisequal);
const isEqualLower = (name1.toLowerCase === name2.toLowerCase); 
console.log(isEqualLower);


