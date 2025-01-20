document.addEventListener("DOMContentLoaded", async () => {
  const selectedFilm = JSON.parse(localStorage.getItem("selectedFilm"));

  if (!selectedFilm) {
    alert("Aucune information de film n'a été trouvée !");
    return;
  }

  console.log("Données du film sélectionné:", selectedFilm); // Pour le debug

  const filmPoster = document.getElementById("filmPoster");
  filmPoster.src = selectedFilm.image;
  filmPoster.alt = `Affiche du film : ${selectedFilm.title}`;
  
  const filmTitle = document.getElementById("filmTitle");
  filmTitle.textContent = selectedFilm.title;

  try {
    const apiKey = "190fc5fe"; 
    const response = await fetch(`https://www.omdbapi.com/?i=${selectedFilm.imdb}&plot=full&apikey=${apiKey}`);
    const movieData = await response.json();

    if (movieData.Response === "True") {
      const filmActors = document.getElementById("filmActors").querySelector("span");
      filmActors.textContent = movieData.Actors || "N/A";

      const filmDirector = document.getElementById("filmDirector").querySelector("span");
      filmDirector.textContent = movieData.Director || "N/A";

      const plotElement = document.createElement("p");
      plotElement.className = "movie-plot";
      plotElement.innerHTML = `<strong>Résumé :</strong> ${movieData.Plot || "Résumé non disponible."}`;
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
