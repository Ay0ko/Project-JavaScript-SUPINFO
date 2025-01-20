document.addEventListener("DOMContentLoaded", () => {
  const entreeRecherche = document.getElementById("search");
  const ResultatRecherche = document.getElementById("ResultatRecherche");
  const creerAffiche = (film) => {
    const affiche = document.createElement("img");
    affiche.src = film.image;
    affiche.alt = `Chargement de l'affiche du film : '${film.title}'`;
    affiche.className = "afficheChargee";
    affiche.addEventListener("click", () => {
      const params = new URLSearchParams({
        title: film.title,
        image: film.image,
        imdb: film.imdb,
      });
      window.location.href = `movie.html?${params.toString()}`;
    });
    ResultatRecherche.appendChild(affiche);
  };
  const chercherFilm = async (titre) => {
    if (!titre) {
      ResultatRecherche.innerHTML = "";
      return;
    }
    try {
      const reponse = await fetch(
        `${"https://www.omdbapi.com/"}?apikey=${"190fc5fe"}&s=${titre}`
      );
      const data = await reponse.json();
      ResultatRecherche.innerHTML = "";
      if (data.Reponse == "True") {
        data.Search.forEach((film) => {
          const afficheChargee = creerAffiche(film);
          ResultatRecherche.appendChild(afficheChargee);
        });
      } else {
        ResultatRecherche.innerHTML =
          "Nous n'avons pas trouvé de film correspondant à votre recherche.";
      }
    } catch (erreur) {
      console.error(
        "Il y a eu un problème lors de la récupéation des films : ",
        erreur
      );
      ResultatRecherche.innerHTML =
        "Une erreur est survenue lors de la récupération des films, veuillez réessayer.";
    }
  };
  entreeRecherche.addEventListener("input", (event) => {
    const titre = event.target.value.trim();
    chercherFilm(titre);
  });
});

const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("ResultatRecherche");
const URL = `${"https://www.omdbapi.com/"}?apikey=${"190fc5fe"}&s=${movieTitle}`;

function searchMovies() {}
