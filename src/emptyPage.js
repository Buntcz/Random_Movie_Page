const content = document.querySelector(".content1");
const page = document.querySelector(".content2")


function emptyAndShow() {
    content.innerHTML = ""
    page.style.display = 'flex';
}

export {emptyAndShow}