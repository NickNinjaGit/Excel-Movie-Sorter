const excelTreat = require('./excel-treatment.js');
const chalk = require('chalk');

async function SortMovie(moviesqty) {
    const filmlist = await excelTreat.ExtractMovieNames();


    const sortedMovies = [];
    for (let i = 0; i < moviesqty; i++) {
        const randomIndex = Math.floor(Math.random() * filmlist.length);
        const sortedMovie = filmlist[randomIndex];
        // check if movie isnt sorted before adding
        if (!sortedMovies.includes(sortedMovie)) {
            sortedMovies.push(sortedMovie);
        }    
        else {
            i--;
        }
    }
    console.log(chalk.blueBright(`${moviesqty} filmes sorteados:`));
    console.log(chalk.bold.red('======================'));
    sortedMovies.forEach((movie) => {
        console.log(chalk.bold.red(`${chalk.green(movie)}\n======================`));
    })

}

SortMovie(3);
