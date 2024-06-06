import './style.css'
import { emptyAndShow } from './emptyPage'
import { generateMovie } from './movieGenerator';

const button = document.querySelector(".random")

button.addEventListener("click", () => {
    emptyAndShow()
    generateMovie()
});

