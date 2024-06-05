function createNewPage() {
    const newPage = document.querySelector(".newPage")

    const posterSpace = document.createElement("div");
    posterSpace.classList.add("poster")

    const nameSpace = document.createElement("div");
    nameSpace.classList.add("title")

    const descriptionSpace = document.createElement("div");
    descriptionSpace.classList.add("description")

    const plotSpace = document.createElement("div");
    plotSpace.classList.add("plot")
    
    newPage.appendChild(posterSpace)
    newPage.appendChild(nameSpace);
    newPage.appendChild(descriptionSpace);
    newPage.appendChild(plotSpace);
   
}

export {createNewPage}