import big from "./big.js";

customElements.define('article-big',big)

import small from "./small.js";

customElements.define('article-small',small)

import wide from "./wide.js";

customElements.define('article-wide',wide)

fetch('./data/info.JSON')
  .then((response) => response.json()) // Parsear el JSON
  .then((data) => {
   
    const bigContainer = document.querySelector(".bigArticles");
    const smallContainer = document.querySelector(".smallArticles");
    const wideContainer = document.querySelector(".wideArticles");

    // Asignar datos a los componentes 
    const bigArticles = bigContainer.querySelectorAll("article-big");
    bigArticles.forEach((article, index) => {
      article.data = data[index]; // Pasar datos del JSON
    });

    const smallArticles = smallContainer.querySelectorAll("article-small");
    smallArticles.forEach((article, index) => {
      
      article.data = data[index + bigArticles.length];
    });

   
    const wideArticles = wideContainer.querySelectorAll("article-wide");
    wideArticles.forEach((article, index) => {
   
      article.data = data[index + bigArticles.length + smallArticles.length];
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
