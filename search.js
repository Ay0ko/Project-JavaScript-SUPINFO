// clé : 190fc5fe

const inputRecherche = document.getElementById("search");
const retourRecherche = document.getElementById("ResultatRecherche");

async function chargerFilms(titreRecherche) {
  const URL = `https://www.omdbapi.com/?apikey=190fc5fe&s=${titreRecherche}`;

  try {
    const reponse = await fetch(URL);
    const donnees = await reponse.json();

    if (donnees.Response === "True") {
      afficherFilms(donnees.Search);
    } else {
      retourRecherche.innerHTML = `<p>Aucun film trouvé pour "${titreRecherche}".</p>`;
    }
  } catch (erreur) {
    console.error("Erreur lors de la récupération des films :", erreur);
    retourRecherche.innerHTML = `<p>Une erreur est survenue. Veuillez réessayer plus tard.</p>`;
  }
}

function afficherFilms(films) {
  retourRecherche.innerHTML = "";

  films.forEach((film) => {
    const afficheFilm = document.createElement("div");
    afficheFilm.classList.add("listeElementsRecherche");
    afficheFilm.dataset.id = film.imdbID;

    const posterFilm =
      film.Poster !== "N/A" ? film.Poster : "img/image_non_trouvee.png";

    afficheFilm.innerHTML = `
      <div class="poster">
        <img src="${posterFilm}" alt="Affiche du film : ${film.Title}">
      </div>
      <div class="infoElementsRecherche">
          <h3>${film.Title}</h3>
          <p>Année : ${film.Year}</p>
      </div>
    `;

    afficheFilm.addEventListener("click", () => {
      const filmData = {
        title: film.Tilte,
        image: posterFilm,
        imdb: film.imdbID,
      };

      localStorage.setItem("selectedFilm", JSON.stringify(filmData));
      window.location.href = "movie.html";
    });

    retourRecherche.appendChild(afficheFilm);
  });
}

function chercherFilms() {
  const titreRecherche = inputRecherche.value.trim();

  if (titreRecherche.length > 0) {
    chargerFilms(titreRecherche);
  } else {
    retourRecherche.innerHTML =
      "<p>Veuillez saisir un titre pour rechercher.</p>";
  }
}

inputRecherche.addEventListener("input", chercherFilms);
