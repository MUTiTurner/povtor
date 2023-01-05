'use strict'

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

// start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};




function rememberMYFilms() {
   for (let i = 0; i < 2; i++) {
      let a = prompt('Один из последних просмотренных фильмов?', '');
      let b = prompt('На сколько оцените его?', '');

      if (a === '' || b === '' || a === null || b === null || a.length > 50 || b.length > 50) {
         --i;
         continue;
      }

      personalMovieDB.movies[a] = b;
   }
}

// rememberMYFilms()

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
   }
   if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
   }
   if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
   }
}

// detectPersonalLevel()

function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      let res = prompt(`Ваш лмюбиый жанр под номером ${i}`, '')
      personalMovieDB.genres[`${personalMovieDB.genres.length}`] = res;
   }
}

// writeYourGenres();


function showMyDB() {
   if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
   }
}

// showMyDB();
