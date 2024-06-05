import './style.css'
import { emptyAndCreate } from './emptyPage'
import { createNewPage } from './createNewPage';
import { generateMovie } from './movieGenerator';

const button = document.querySelector(".random")

button.addEventListener("click", () => {
    emptyAndCreate()
    createNewPage();
    generateMovie();
});

