import { connectToApi } from "./connectToApi.js";

const form = document.querySelector("[data-form]");

async function createVideo() {
    const image = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-title]").value;
    const description = Math.floor(Math.random() * 10).toString();

    await connectToApi.createVideo(title, description, url, image);

    window.location.href = "../pages/envio-concluido.html";
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createVideo()
})