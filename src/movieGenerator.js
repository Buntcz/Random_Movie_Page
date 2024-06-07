import { apiKey } from "./apiKey"
import { arrayOfIds } from "./arrayOfIDs";

const title = document.querySelector(".title");
const description = document.querySelector(".description");
const plot = document.querySelector(".plot")
const image = document.querySelector(".posterImage")

let randomNum = Math.floor(Math.random() * 5);
let randomArray = arrayOfIds[randomNum]

async function generateMovie() {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${randomArray}`)
    let movie = await response.json();
    let response1 = await fetch(`http://img.omdbapi.com/?apikey=${apiKey}&i=${randomArray}`)
    
    title.textContent = `Title: ${movie.Title}`;
    description.textContent = `${movie.Plot}`
    plot.textContent = `Genre: ${movie.Genre}`
    
    image.src = response1.url
}

export {generateMovie};