import { connectToApi } from "./connectToApi.js";
import buildCard from "./showVideos.js";

async function searchVideos() {
    
    const searchData = document.querySelector("[data-search]").value;
    const search = await connectToApi.searchVideo(searchData);
    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    
    console.log(searchData)
    search.forEach(element => list.appendChild(buildCard(element.titulo, element.descricao, element.url, element.imagem)))

    if (search.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo">A busca não encontrou resultados.</h2>`;
    }
}

const searchButton = document.querySelector("[data-search-button]");
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    searchVideos();
})