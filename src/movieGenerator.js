import { apiKey } from "./apiKey"

const title = document.querySelector(".title");
const description = document.querySelector(".description");
const plot = document.querySelector(".plot")

async function generateMovie() {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=tt0050083`)
    let movie = await response.json();
    
    // title.textContent = `${movie.Title}`;

    console.log(movie);
}

export {generateMovie};