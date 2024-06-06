const content = document.querySelector(".content1");
const page = document.querySelector(".newPage")


function emptyAndShow() {
    content.innerHTML = ""
    page.style.display = 'grid';
}

export {emptyAndShow}