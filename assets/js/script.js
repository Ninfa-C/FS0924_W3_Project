const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log("<------- ESERCIZIO A ------->");
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("<------- ESERCIZIO B ------->");
let random = Math.floor(Math.random() * 20);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("<------- ESERCIZIO C ------->");
let me = {
  name: "Ninfa",
  surname: "Carreno",
  age: 29,
};

console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("<------- ESERCIZIO D ------->");
let newMe = { ...me };
delete newMe.age;

console.log(newMe);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("<------- ESERCIZIO E ------->");
newMe.skills = ["html", "css"];
console.log(newMe);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("<------- ESERCIZIO F ------->");
newMe.skills.push("javascript(quasi)");
console.log(newMe);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("<------- ESERCIZIO G ------->");
newMe.skills.pop();
console.log(newMe);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("<------- ESERCIZIO 1 ------->");

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("<------- ESERCIZIO 2 ------->");

function whoIsBigger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

console.log(whoIsBigger(8, 9));

/*oppure 
function whoIsBigger (x,y){
   return Math.max (x,y)
}

console.log (whoIsBigger(8,9))*/

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("<------- ESERCIZIO 3 ------->");

function splitMe(string) {
  return string.split(" ");
}

console.log(splitMe("Ciao a tutto il corso FS0924"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("<------- ESERCIZIO 4 ------->");

function deleteOne(string, boolean) {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}

console.log(deleteOne("Islanda", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("<------- ESERCIZIO 5 ------->");

function onlyLetters(str) {
  return str.replaceAll(/[0-9]/g, "");
}

console.log(onlyLetters("Ciao a tutto il corso FS0924"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("<------- ESERCIZIO 6 ------->");

function isThisAnEmail(str) {
  let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regexEmail.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(isThisAnEmail("ninfa_95@hotmail.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("<------- ESERCIZIO 7 ------->");

function whatDayIsIt() {
  let weekDays = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedi",
    "Venerdì",
    "Sabato",
  ];
  let now = new Date();
  let dayNumber = now.getDay();
  let dayName = weekDays[dayNumber];
  return dayName;
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("<------- ESERCIZIO 8 ------->");

function rollTheDices(n) {
  let yourResults = {};
  let results = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let roll = dice();
    results.push(roll);
    sum += roll;
  }
  yourResults.sum = sum;
  yourResults.values = results;
  return yourResults;
}

console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e
   ritorna il numero di giorni trascorsi da tale data.
*/
console.log("<------- ESERCIZIO 9 ------->");

function howManyDays(date) {
  let today = new Date();
  let newDate = new Date(date);
  let millisecondsDifference = today - newDate;
  let daysDifferrence = Math.floor(
    millisecondsDifference / (1000 * 60 * 60 * 24)
  );
  return daysDifferrence;
}

console.log(howManyDays("2024-11-10"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("<------- ESERCIZIO 10 ------->");

function isTodayMyBirthday(date) {
  let birthday = new Date(date);
  let today = new Date();
  if (
    today.getDate() === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isTodayMyBirthday("1995-11-15"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("<------- ESERCIZIO 11 ------->");
function deleteProp(obj, str) {
  delete obj[str];
  return;
}

deleteProp(newMe, "surname");
console.log(newMe);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("<------- ESERCIZIO 12 ------->");

const newMovies = [...movies];

function recent() {
  let newestMovie = { ...newMovies[0] };
  movies.forEach(function (element) {
    if (parseInt(element.Year) > parseInt(newestMovie.Year)) {
      newestMovie = { ...element };
    }
  });
  return newestMovie;
}

console.log(recent());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("<------- ESERCIZIO 13 ------->");
function countMovies(array) {
  return array.length;
}

console.log(countMovies(newMovies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("<------- ESERCIZIO 14 ------->");

function onlyTheYears(array) {
  const movieYears = array.map((element) => {
    return element.Year;
  });
  return movieYears;
}

console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("<------- ESERCIZIO 15 ------->");

function onlyInLastMillennium(array) {
  return array.filter((element) => Number(element.Year) < 2001);
}

console.log(onlyInLastMillennium(newMovies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("<------- ESERCIZIO 16 ------->");

function sumAllTheYears(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += parseInt(element.Year);
  });
  return sum;
}

console.log(sumAllTheYears(newMovies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e 
  ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("<------- ESERCIZIO 17 ------->");

function searchByTitle(str) {
  return movies.filter(
    (element) => element.Title.toLowerCase().includes(str.toLowerCase()) //mi ha fatto impazzire perchè se scritto in minuscolo non riconosceva la stringa
  );
}

console.log(searchByTitle("lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("<------- ESERCIZIO 18 ------->");

function searchAndDivide(str) {
  const match = [];
  const unmatch = [];
  let x = movies.filter((element) =>
    element.Title.toLowerCase().includes(str.toLowerCase())
  );
  let y = movies.filter(
    (element) => !element.Title.toLowerCase().includes(str.toLowerCase())
  );
  if (x.length > 0) {
    match.push(...x);
    unmatch.push(...y);
  } else {
    unmatch = [...movies];
  }
  return { match, unmatch };
}
console.log(searchAndDivide("lord"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("<------- ESERCIZIO 19 ------->");

function removeIndex(n) {
  let arrayIndex = [...newMovies.splice(n, 1)];
  return arrayIndex;
}

console.log(removeIndex(2));
console.log(newMovies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("<------- ESERCIZIO 20 ------->");
const container = document.getElementById("container");
console.log(container);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("<------- ESERCIZIO 21 ------->");

const td = document.getElementsByTagName("td");

console.log(td); //html collection ma si comporta come un array

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> 
  all'interno della pagina.
*/
console.log("<------- ESERCIZIO 22 ------->");

function printConsole() {
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
}
printConsole();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("<------- ESERCIZIO 23  link in red ------->");

function red() {
  const link = document.querySelectorAll("a");
  link.forEach((element) => (element.style.backgroundColor = "red"));
  return;
}

red();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("<------- ESERCIZIO 24  elemento lista ------->");

const myList = document.getElementById("myList");
const newLi = document.createElement("li");
newLi.innerText = "primo elemento nella lista";
myList.appendChild(newLi);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("<------- ESERCIZIO 25 ------->");

function resetList() {
  myList.innerHTML = "";
}

//resetList()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("<------- ESERCIZIO 26 ------->");

const tr = document.querySelectorAll("tr");
tr.forEach((element) => element.classList.add("test"));

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" 
  (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log("<------- ESERCIZIO 27 ------->");

function halfTree(nHeight) {
  for (let i = 1; i <= nHeight; i++) {
    console.log("*".repeat(i));
  }
}

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("<------- ESERCIZIO 28 ------->");
function tree(nHeight) {
  for (let i = 1; i <= nHeight; i++) {
    let spazi = " ".repeat(nHeight - i); // questo per centrare gli asterischi
    let asterischi = "*".repeat(2 * i - 1); // ad ogni riga bisogna raddoppiare il valore di i e diminuirlo di 1
    console.log(spazi + asterischi);
  }
}

tree(3);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e 
  ritorna true se il numero fornito è un numero primo.
*/
console.log("<------- ESERCIZIO 29 ------->");
function isItPrime(n) {
    
  //numero primo disibile solo per uno e se stesso quindi se lo divido per ogni numero compreso tra 2 e il numero precedente e trovo un divisore il cui resto fa 0 non è un numero primo
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log (isItPrime(97));
/* Questo array viene usato per gli esercizi. Non modificarlo. */
