const nav = document.querySelectorAll(".nav .navigation");

nav.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});


const filmTrend = [ "Guardians of the Galaxy Vol. 3",
                    "Mufasa : The Lion King",
                    "Un ours dans le Jura",
                    "Beating Hearts",
                    "Gladiator II",
                    "Venom the Last Dance",
                    "The Most Precious of Cargoes",
                    "BabyGirl",
                    "Monsieur Aznavour"
                  ];

