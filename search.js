// clé : 190fc5fe
// titre : https://www.omdbapi.com/?s=thr&page=1&apikey=1d817c6c
// details : https://www.omdbapi.com/?i=tt3896198&apikey=1d817c6c

const inputRecherche = document.getElementById('search');
const retourRecherche = document.getElementById('ResultatRecherche');


async function chargerFilms(elementEntre) {
  const URL = `${"https://www.omdbapi.com/"}?apikey=${"190fc5fe"}&s=${elementEntre}`;
  const recherche = await fetch(URL);
  const donnees = await recherche.json();
  if (donnees.Response == "True") chargerFilms(donnees.Search);
  else retourRecherche.innerHTML = "";
}

function chercherFilms() {
  let entree = (inputRecherche.value).trim();
  if (entree.length > 0) {
    chargerFilms(entree);
  } else {
    retourRecherche.innerHTML ="";
  }
}

function afficherFilms(films) {
  retourRecherche.innerHTML = "";
  for (let idx = 0; idx < films.length; idx++) {
    let afficheFilm = document.createElement('div');
    afficheFilm.dataset.id = films[idx].imdbID;
    afficheFilm.classList.add('listeElementsRecherche');
    let posterFilm = films[idx].Poster !== "N/A" ? films[idx].Poster : "img/image_non_trouvee.png";
    afficheFilm.innerHTML = `
    <div class="poster">
      <img src="${posterFilm}" alt="Affiche du film : ${films[idx].Title}">
    </div>
      <div class="infoElementsRecherche">
          <h3> ${films[idx].Title} </h3>
          <p> ${films[idx].Released} </p>
      </div>
    </div>`;
    retourRecherche.appendChild(afficheFilm);
  }
}

inputRecherche.addEventListener('keyup', chercherFilms());

// document.addEventListener("DOMContentLoaded", () => {
//   const entreeRecherche = document.getElementById("search");
//   const ResultatRecherche = document.getElementById("ResultatRecherche");
//   const creerAffiche = (film) => {
//     const affiche = document.createElement("img");
//     affiche.src = film.image;
//     affiche.alt = `Chargement de l'affiche du film : '${film.title}'`;
//     affiche.className = "afficheChargee";
//     affiche.addEventListener("click", () => {
//       const params = new URLSearchParams({
//         title: film.title,
//         image: film.image,
//         imdb: film.imdb,
//       });
//       window.location.href = `movie.html?${params.toString()}`;
//     });
//     ResultatRecherche.appendChild(affiche);
//   };
//   const chercherFilm = async (titre) => {
//     if (!titre) {
//       ResultatRecherche.innerHTML = "";
//       return;
//     }
//     try {
//       const reponse = await fetch(
//         `${"https://www.omdbapi.com/"}?apikey=${"190fc5fe"}&s=${titre}`
//       );
//       const data = await reponse.json();
//       ResultatRecherche.innerHTML = "";
//       if (data.Reponse == "True") {
//         data.Search.forEach((film) => {
//           const afficheChargee = creerAffiche(film);
//           ResultatRecherche.appendChild(afficheChargee);
//         });
//       } else {
//         ResultatRecherche.innerHTML =
//           "Nous n'avons pas trouvé de film correspondant à votre recherche.";
//       }
//     } catch (erreur) {
//       console.error(
//         "Il y a eu un problème lors de la récupéation des films : ",
//         erreur
//       );
//       ResultatRecherche.innerHTML =
//         "Une erreur est survenue lors de la récupération des films, veuillez réessayer.";
//     }
//   };
//   entreeRecherche.addEventListener("input", (event) => {
//     const titre = event.target.value.trim();
//     chercherFilm(titre);
//   });
// });


// const searchInput = document.getElementById("search");
// const resultDiv = document.getElementById("ResultatRecherche");
// const URL = `${"https://www.omdbapi.com/"}?apikey=${"190fc5fe"}&s=${movieTitle}`;
