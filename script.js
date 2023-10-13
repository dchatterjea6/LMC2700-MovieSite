let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
      this.title = title;
      this.rating = rating;
      this.haveWatched = haveWatched;
    }
  }

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    document.getElementById("output").innerHTML += 'A new movie is added';
  };

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
  document.getElementById("output").innerHTML +=('Printing all movies....<br>');
    allMovies.forEach((movie, index) => {
      const { title, rating, haveWatched } = movie;
      document.getElementById("output").innerHTML +=(`${title}, rating of ${rating}, havewatched: ${haveWatched}<br>`);
    });
    
    document.getElementById("output").innerHTML += (`<br>You have ${allMovies.length} movies in total`);
  };

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
  document.getElementById("output").innerHTML +=(`printing movie that has a rating higher than ${rating}<br>`);
    let matches = 0;
    allMovies.forEach((movie) => {
      if (movie.rating > rating) {
        document.getElementById("output").innerHTML +=(`${movie.title} has a rating of ${movie.rating}<br>`);
        matches++;
      }
    });
    document.getElementById("output").innerHTML +=(`<br>In total, there are ${matches} matches`);
  };


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
  document.getElementById("output").innerHTML +=('changing the status of the movie...');
    const movie = allMovies.find((movie) => movie.title === title);
    if (movie) {
      movie.haveWatched = !movie.haveWatched;
    }
  };

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
document.getElementById("output").innerHTML +=("----------------<br>");
document.getElementById("output").innerHTML +=("running program......<br>");
document.getElementById("output").innerHTML +=("----------------<br>");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
document.getElementById("output").innerHTML +=("<br>----------------<br>");
addMovie(movie1);
document.getElementById("output").innerHTML +=("<br>----------------<br>");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.getElementById("output").innerHTML +=("<br>----------------<br>");

printMovies();

/*replace console.log with display on web page*/
document.getElementById("output").innerHTML +=("<br>----------------<br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.getElementById("output").innerHTML +=("<br>----------------<br>");

printMovies();
/*replace console.log with display on web page*/
document.getElementById("output").innerHTML +=("<br>----------------<br>");

highRatings(3.5);