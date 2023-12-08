import { connectToApi } from "./connectToApi.js";

const list = document.querySelector('[data-list]');

export default function buildCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video;
}

async function listVideo() {
    
        const listApi = await connectToApi.listVideos();
        listApi.forEach(elemento => list.appendChild(buildCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    
}

listVideo();