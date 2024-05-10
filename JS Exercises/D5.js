/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* Creo anche una function che restuisca tutti gli elementi di un qualsiasi array */

function outputArrayElements(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const arrayAlphabeth = pets.sort()

console.log(pets)

function alfaOrder(array) {
  const arrayOrderAlpha = array.sort();
  return arrayOrderAlpha;
}
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const reversePets = pets.reverse();

console.log(reversePets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const newPets = pets.shift()
pets.push(newPets)

console.log(pets)

// stessa funzione ma tramite arrow function =>

const newArray = (array) => {
  let newArray = array.shift();
  array.push(newArray);
  console.log(array)
}
console.log(newArray(pets))

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const randomLicense = () => {
  const Strings = 'ABCDEFGHILMNOPQRSTUVWXYZ1234567890';
  const arrayStrings = Strings.split('');
  const targa = [];                // stringa di caratteri

  for (i = 0; i < 7; i++) {
    let randomNum = Math.floor(Math.random() * arrayStrings.length);
    targa.push(arrayStrings[randomNum])

  }

  console.log(targa.join(''));

}

console.log(randomLicense());

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: 'Fiat',
  model: 'Punto',
  color: 'grey',
  trims: ['cheap', 'style', 'topolino'],
}

cars.push(newCar)

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []

for (i = 0; i < cars.length; i++) {

  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === 'b') {
    console.log('Fizz')
  }
  else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let index = 0;

while (index < numericArray.length) {
  if (numericArray[index] !== 32) {
    console.log(numericArray[index])
  }
  else {
    break;
  }
  index++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const newArrayAlpha = [];

for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      newArrayAlpha.push(1)
      break;

    case 'b':
      newArrayAlpha.push(2)
      break;

    case 'c':
      newArrayAlpha.push(3)
      break;

    case 'd':
      newArrayAlpha.push(4)
      break;

    case 'f':
      newArrayAlpha.push(5)
      break;

    case 'g':
      newArrayAlpha.push(6)
      break;

    case 'h':
      newArrayAlpha.push(7)
      break;

    case 'i':
      newArrayAlpha.push(8)
      break;

    case 'j':
      newArrayAlpha.push(9)
      break;

    case 'k':
      newArrayAlpha.push(10)
      break;

    case 'l':
      newArrayAlpha.push(11)
      break;

    case 'm':
      newArrayAlpha.push(12)
      break;

    case 'n':
      newArrayAlpha.push(13)
      break;

    case 'o':
      newArrayAlpha.push(14)
      break;

    case 'p':
      newArrayAlpha.push(15)
      break;

    case 'q':
      newArrayAlpha.push(16)
      break;

    case 'r':
      newArrayAlpha.push(17)
      break;

    case 's':
      newArrayAlpha.push(18)
      break;

    case 't':
      newArrayAlpha.push(19)
      break;

    case 'u':
      newArrayAlpha.push(20)
      break;

    case 'v':
      newArrayAlpha.push(21)
      break;

    case 'w':
      newArrayAlpha.push(22)
      break;

    case 'x':
      newArrayAlpha.push(23)
      break;

    case 'y':
      newArrayAlpha.push(24)
      break;

    case 'z':
      newArrayAlpha.push(25)
      break;

    default:

      break;
  }
}
console.log(newArrayAlpha)

