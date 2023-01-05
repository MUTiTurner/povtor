'use strict'


const personalMovieDB = {
   movies: {},
   actors: {},
   genres: [],
   privat: false,

   start: function () {
      let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }

      personalMovieDB.count = numberOfFilms;
   },
   rememberMYFilms: function () {
      for (let i = 0; i < 2; i++) {
         let a = prompt('Один из последних просмотренных фильмов?', '');
         let b = prompt('На сколько оцените его?', '');

         if (a === '' || b === '' || a === null || b === null || a.length > 50 || b.length > 50) {
            --i;
            continue;
         }

         personalMovieDB.movies[a] = b;
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         alert("Просмотрено довольно мало фильмов");
      }
      if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         alert("Вы классический зритель");
      }
      if (personalMovieDB.count >= 30) {
         alert("Вы киноман");
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i < 4; i++) {
         let res = prompt(`Ваш лмюбиый жанр под номером ${i}`, '')
         if (res === null || res === '') {
            --i;
            continue;
         }
         personalMovieDB.genres[i - 1] = res;
      }

      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр #${i + 1} - это ${item}`)
      })
   },

   showMyDB: function () {
      if (personalMovieDB.privat === false) {
         console.log(personalMovieDB);
      }
   },

   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat === false) {
         personalMovieDB.privat = true;
      } else {
         personalMovieDB.privat = false;
      }
   }

};

// personalMovieDB.start();
// personalMovieDB.rememberMYFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();