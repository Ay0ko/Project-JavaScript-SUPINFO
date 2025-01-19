document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    const image = params.get("image");
    const imdb = params.get("imdb");
  
    if (title && image && imdb) {
      document.getElementById("movieTitle").textContent = title;
      document.getElementById("movieImage").src = image;
      document.getElementById("movieImdb").textContent = `IMDb ID: ${imdb}`;
    } else {
      console.error("Les paramètres requis sont absents dans l'URL.");
    }
  });
  