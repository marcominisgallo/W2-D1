/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA
Ci sono diversi tipi di Datatype:
- Stringa: valori delimitati da apici(singoli o doppi), sotto forma di parole leggibili (es. 'marco'). 
Nel caso dovesse essere un valore composto da più parole, dalla seconda parola ogni prima lettera andrà in maiuscolo (es. 'marcoMinisgallo').
- Numeri: sotto forma di cifre e soprattutto scritto senza apici attorno al valore (es. 100)
-Booleani: esprimono un valore logico di True o False(ossia vero o falso), rispetto alla condizione che gli è stata assegnata.
-undefined: è un valore che non è stato definito alla variabile.
-null: è quando si definisce VOLUTAMENTE l'assenza di un valore a una variabile*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "marco";

console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;

let addizione = num1 + num2;

console.log(addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "minisgallo";

const myAge = 23;
/* se io adesso volessi riassegnare un nuovo valore alla variabile myAge(es. myAge = 24;), mi darebbe errore, dato che 
è stata dichiarata come const.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 16;
let sottrazione = num3 - x;

console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

let verifica1 = name1 === name2;
console.log(verifica1);

let verifica2 = name1.toLowerCase() === name2.toLowerCase();
console.log(verifica2);
