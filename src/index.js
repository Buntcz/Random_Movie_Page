import './style.css'
import { emptyAndShow } from './emptyPage'
import { generateMovie } from './movieGenerator';
import { emptyNewPage } from './emptyNewPage';

const button = document.querySelector(".random")
const generateNew = document.querySelector(".randomAgain")

button.addEventListener("click", () => {
    emptyAndShow()
    generateMovie()
});


generateNew.addEventListener("click", () => {
    emptyNewPage();
    generateMovie();
})