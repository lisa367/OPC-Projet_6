const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");


const cadreImg = document.querySelectorAll(".cadre-img");
const vignettes = document.querySelectorAll(".vignette");
const modalWindow = document.getElementById("modal-window");
const closeButton = document.getElementById("close-button");
// const div = document.querySelector(".movies-images");



// Toggle modal window visibility
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalGenre = document.getElementById("modal-genre");
const modalCountries = document.getElementById("modal-countries");
const modalYear = document.getElementById("modal-year");
const modalDuration = document.getElementById("modal-duration");
const modalDirector = document.getElementById("modal-directors");
const modalActors = document.getElementById("modal-actors");
const modalRated = document.getElementById("modal-rated");
const modalImdb = document.getElementById("modal-imdb");
const modalResume = document.getElementById("modal-resume");


function displayModalWindow() {
    modalWindow.setAttribute("class", "modal-visible");
}
function closeModalWindow() {
    modalWindow.setAttribute("class", "modal-hidden");
}

async function getVignetteData(vignette) {
    const id = vignette.getAttribute("alt");
    const img = vignette.getAttribute("src");
    const vignetteMovie = await fetch(`http://localhost:8000/api/v1/titles/${id}`)

    if (vignetteMovie.ok === true) {
        console.log(vignetteMovie.status);
        const vignetteData = await vignetteMovie.json();
        console.log(vignetteData);

        modalImg.setAttribute("src", img);
        modalTitle.innerHTML = vignetteData["title"];;
        modalGenre.innerHTML = `Genres: ${vignetteData["genres"]}`;
        modalCountries.innerHTML = `Countries: ${vignetteData["countries"]}`;
        modalYear.innerHTML = vignetteData["year"];
        modalDuration.innerHTML = `${vignetteData["duration"]}min`;
        modalDirector.innerHTML = `Directors ${vignetteData["directors"]}`;
        modalActors.innerHTML = `Cast: ${vignetteData["actors"].slice(0, 6)}`;
        modalRated.innerHTML = vignetteData["rated"];
        modalImdb.innerHTML = vignetteData["imdb_score"];
        modalResume.innerHTML = vignetteData["long_description"];

        return vignetteData
    } else {
        throw new Error("Oops ! Invalid id");
    }
}

closeButton.onclick = closeModalWindow;
vignettes.forEach(element => {
    element.onclick = function () {
        getVignetteData(element);
        displayModalWindow();
        // getVignetteData(element);
    }
});




// Horizontal scrolling
/*function moveRight(i) {
    // const originalX = cadreImg[i].getBoundingClientRect()["x"];
    const originalX = cadreImg[i].getBoundingClientRect()["x"];
    let newX = originalX;
    // let newX = originalX;
    // console.log(cadreImg[i].getBoundingClientRect())
    cadreImg[i].style.transition = "1.5s";
    cadreImg[i].style.transform = `translateX(${newX + (5 * 12)}px)`;
    newX -= (5 * 16);
    // cadreImg[i].style.transform = `translateX(${vignettes[0].clientWidth}px)`;
    // newX += vignettes[0].clientWidth;
    // console.log(originalX);
    //console.log(newX);
    // console.log(cadreImg[i].getBoundingClientRect())
}
function moveLeft(i) {
    // console.log(cadreImg[i].getBoundingClientRect())
    const originalX = cadreImg[i].getBoundingClientRect()["x"];
    let newX = originalX;
    // console.log(cadreImg[i].getBoundingClientRect())

    cadreImg[i].style.transition = "1.5s";
    cadreImg[i].style.transform = `translateX(-${newX + (5 * 12)}px)`;
    newX -= (5 * 16);
    // console.log(cadreImg[i].getBoundingClientRect())
}


for (let i of [0, 1, 2, 3]) {
    arrowsRight[i].onclick = function () {
        moveRight(i)

    };
    arrowsLeft[i].onclick = function () {
        moveLeft(i);
    };
}
*/
