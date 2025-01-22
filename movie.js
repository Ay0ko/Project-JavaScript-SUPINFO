document.addEventListener("DOMContentLoaded", async () => {
  const selectedFilm = JSON.parse(localStorage.getItem("selectedFilm"));

  if (!selectedFilm) {
    alert("Aucune information de film n'a été trouvée !");
    return;
  }

  console.log("Données du film sélectionné:", selectedFilm); 

  const filmPoster = document.getElementById("filmPoster");
  filmPoster.src = selectedFilm.image;
  filmPoster.alt = `Affiche du film : ${selectedFilm.title}`;
  
  const filmTitle = document.getElementById("filmTitle");
  filmTitle.textContent = selectedFilm.title;

  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${selectedFilm.imdb}&plot=full&apikey=${"190fc5fe"}`);
    const movieData = await response.json();
  
    if (movieData.Response === "True") {
      const actorNames = document.getElementById("actorNames");
      actorNames.textContent = movieData.Actors || "N/A";
  
      const directorName = document.getElementById("directorName");
      directorName.textContent = movieData.Director || "N/A";

      const genreName = document.getElementById("genreName");
      genreName.textContent = movieData.Genre || "N/A";
  
      const plotElement = document.createElement("p");
      plotElement.className = "movie-plot";
      plotElement.innerHTML = `<strong>Resume :</strong> ${movieData.Plot || "Résumé non disponible."}`;
      document.querySelector(".movie-details").appendChild(plotElement);
    } else {
      console.error("Erreur API OMDb :", movieData.Error);
      alert("Impossible de récupérer les détails du film.");
    }
  } catch (error) {
    console.error("Erreur de requête API :", error);
    alert("Une erreur est survenue lors de la récupération des détails du film.");
  }
});  
