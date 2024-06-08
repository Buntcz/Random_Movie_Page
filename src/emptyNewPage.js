const poster = document.querySelector(".posterImage");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const plot = document.querySelector(".plot")

function emptyNewPage() {
    poster.src = ""
    title.innerHTML = ""
    description.innerHTML = ""
    plot.innerHTML = ""
}

export {emptyNewPage};