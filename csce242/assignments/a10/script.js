async function showMovies(){
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await response.json();
    let moviesSection = document.getElementById("movies-section");
    
    //loop through the breweries
    for(i in moviesJSON){
        let movie = moviesJSON[i];
        moviesSection.append(getMovieItem(movie));
    }
}

function getMovieItem(movie){
    let movieSection = document.createElement("section");
    movieSection.classList.add("movie");

    let imgElem = document.createElement("img");
    imgElem.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    movieSection.append(imgElem);

    let infoSection = document.createElement("section");
    infoSection.classList.add("movie-info");
    movieSection.append(infoSection);

    // Movie Title
    let h2Elem = document.createElement("h2");
    h2Elem.innerText = movie.title;
    infoSection.append(h2Elem);

    // Director
    let pDir = document.createElement("p");
    pDir.innerHTML = `<b>Director:</b> ${movie.director}`;
    infoSection.append(pDir);

    // Actors
    let pActors = document.createElement("p");
    pActors.innerHTML = `<b>Actors:</b> ${movie.actors.join(', ')}`;
    infoSection.append(pActors);

    // Year Released
    let pYear = document.createElement("p");
    pYear.innerHTML = `<b>Year Released:</b> ${movie.year}`;
    infoSection.append(pYear);

    // Genres
    let pGenres = document.createElement("p");
    pGenres.innerHTML = `<b>Genres:</b> ${movie.genres.join(', ')}`;
    infoSection.append(pGenres);

    // Description
    let pDesc = document.createElement("p");
    pDesc.innerText = movie.description;
    infoSection.append(pDesc);

    return movieSection;
}

window.onload = function(){
    this.showMovies();
}