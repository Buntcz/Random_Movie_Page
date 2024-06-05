const content = document.querySelector(".content");

function emptyAndCreate() {
    content.innerHTML = ""
    const newPage = document.createElement("div");
    newPage.classList.add("newPage")

    content.appendChild(newPage);
}

export {emptyAndCreate}