const nav = document.querySelectorAll(".nav .navigation");
nav.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});

const wickedButton = document.querySelector(".buttonWicked");
const wickedDesc = document.querySelector("#descWicked");

const wickedData = {
  title: "Wicked",
  image:
    "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_SX300.jpg",
  imdb: "tt1262426",
};

const redirectToWicked = () => {
  localStorage.setItem("selectedFilm", JSON.stringify(wickedData));
  window.location.href = "movie.html";
};

wickedButton.addEventListener("click", redirectToWicked);
wickedDesc.addEventListener("click", redirectToWicked);

const filmTrend = [
  "The Count of Monte-Cristo",
  "Despicable Me 4",
  "Inside Out 2",
  "Guardians of the Galaxy Vol. 3",
  "Mufasa: The Lion King",
  "Un ours dans le Jura",
  "Beating Hearts",
  "Gladiator II",
  "Venom the Last Dance",
  "The Most Precious of Cargoes",
  "BabyGirl",
  "Monsieur Aznavour",
];

const afficheTrend = [
  "https://m.media-amazon.com/images/M/MV5BMTY4NTA3ZDYtMWVkYy00MGNkLTlmYzUtODQ5YjZlZTA3YjA5XkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BYjBkOWUwODYtYWI3YS00N2I0LWEyYTktOTJjM2YzOTc3ZDNlXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BYmE1Y2E0NDMtMDI5MS00ZjY5LWE4YmEtMTA1YzY0NTY0ZjZiXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjY0NGU4NDMtYWI2ZS00NDE2LWE5MzUtM2UyODUyNmFmN2ZhXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BM2MxM2EyMzItNWMxYS00YzhkLTk1ZDgtMjM2Y2I1MzZlYWEzXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmRlYjBiMjAtZWVkYy00ZDk4LTk5YWUtNDhlNDA3MzM0Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
];

const filmImdb = [
  "tt26446278",
  "tt7510222",
  "tt22022452",
  "tt6791350",
  "tt13186482",
  "tt33984333",
  "tt27490099",
  "tt9218128",
  "tt16366836",
  "tt10462154",
  "tt30057084",
  "tt26743414",
];

function genererFilms(indice, nb) {
  const filmContainer = document.getElementById("movieContainer");

  for (let i = indice; i < indice + nb && i < filmTrend.length; i++) {
    const affiche = document.createElement("div");
    affiche.classList.add("affichesTrend");
    affiche.innerHTML = `
      <div class="poster">
        <img src="${afficheTrend[i]}" alt="Affiche du film : ${filmTrend[i]}">
      </div>
      <div class="titre">
        <h2> ${filmTrend[i]} </h2>
      </div>
    `;
    affiche.loading = "lazy";
    affiche.id = filmImdb[i];

    affiche.addEventListener("click", () => {
      const filmData = {
        title: filmTrend[i],
        image: afficheTrend[i],
        imdb: filmImdb[i],
      };

      localStorage.setItem("selectedFilm", JSON.stringify(filmData));
      window.location.href = "movie.html";
    });
    filmContainer.appendChild(affiche);
    setTimeout(() => {
      affiche.classList.add("visible");
    }, 100 * (i - indice));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  genererFilms(0, 3);
});

const bouton = document.getElementById("button1");
let currentIndex = 3;

bouton.addEventListener("click", () => {
  genererFilms(currentIndex, 9);
  document.querySelector(".tendance").classList.add("loaded");

  const buttonContainer = document.getElementById("buttonContainer");
  buttonContainer.remove();
});
