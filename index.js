const nav = document.querySelectorAll(".nav .navigation");

nav.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});

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

const bouton = document.getElementById("button1");
let currentIndex = 2;
bouton.addEventListener("click", () => {
  genererFilms(currentIndex, 9);
  const division = document.getElementById("buttonContainer");
  division.remove();
});

function genererFilms(indice, nb) {
  const filmContainer = document.getElementById("movieContainer");
  for (let i = indice; i < indice + nb && i < filmTrend.length; i++) {
    const affiche = document.createElement("img");
    affiche.src = afficheTrend[i];
    affiche.alt = `Chargement de l'affiche du film : '${filmTrend[i]}'`;
    affiche.className = "afficheChargee";
    affiche.loading = "lazy";
    affiche.id = filmImdb[i];
    filmContainer.appendChild(affiche);
    setTimeout(() => {
      affiche.classList.add("visible");
    }, 100 * (i - indice));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  genererFilms(0, 3);
});
