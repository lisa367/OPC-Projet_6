const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");


const cadreImg = document.querySelectorAll(".cadre-img");
const vignettes = document.querySelectorAll(".vignette");
const modalWindow = document.getElementById("modal-window");
const closeButton = document.getElementById("close-button");
// const div = document.querySelector(".movies-images");

// Horizontal scrolling
let activeIndexRight = 0;
let activeIndexLeft = 0;
let activeIndex = 0;

function moveRight(i) {
    let vignetteWidth = vignettes[i].getBoundingClientRect().width;
    let scrollDistance = vignetteWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    slider.scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
    });
    activeIndexRight = (activeIndexRight - 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
}

function moveLeft(i) {
    let vignetteWidth = vignettes[i].getBoundingClientRect().width;
    let scrollDistance = vignetteWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    slider.scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
}



for (let i of [0, 1, 2, 3]) {
    arrowsRight[i].onclick = function () {
        moveRight(i)

    };
    arrowsLeft[i].onclick = function () {
        moveLeft(i);
    };
}




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


/*
const vignetteData = vignetteData["results"];
if (vignetteMovie) {
    console.log(vignetteData)
    modalImg.setAttribute("src", img);
    modalTitle.innerHTML = title;
    modalGenre.innerHTML = vignetteData["genre"];
    modalYear.innerHTML = vignetteData["year"];
    modalDirector.innerHTML = vignetteData["director"];
    modalActors.innerHTML = vignetteData["actors"];
    modalImbd.innerHTML = vignetteData["avg_score"];
    modalResume.innerHTML = vignetteData["long_description"];
}*/


/*
function moveRight(i) {
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
    // const originalX = cadreImg[i].getBoundingClientRect()["x"];
    const originalX = cadreImg[i].clientWidth;
    let newX = originalX;
    // console.log(cadreImg[i].getBoundingClientRect())
    cadreImg[i].style.transition = "1.5s";
    cadreImg[i].style.transform = `translateX(-${newX + (5 * 12)}px)`;
    newX -= (5 * 16);
    //cadreImg[i].style.transform = `translateX(-${vignettes[0].clientWidth}px)`;
    //newX -= vignettes[0].clientWidth;
    // console.log(cadreImg[i].getBoundingClientRect())
}

function moveRight(i) {
    const originalX = cadreImg[i].clientWidth;
    let newX = originalX;
    cadreImg[i].scrollBy(200, 0);

}
function moveLeft(i) {
    const originalX = cadreImg[i].clientWidth;
    let newX = originalX;
    cadreImg[i].scrollTo(-200, 0);
}
arrowsRight[0].onclick = function () {
    moveRight(0);

};
*/

/*
// document.getElementById("img1.1").style.backgroundColor = "blue";
// document.querySelector("h1").innerHTML = "Hello";
// document.querySelector("h1").style.color = "blue";

const bdy = document.querySelector("body");
const btn = document.getElementsByTagName("button")[0];
// bdy.style.backgroundColor = "blue";
// btn.style.backgroundColor = "pink";
arrowLeft.style.color = "red";

function changeBackgroundColor() {
    bdy.style.backgroundColor = "pink";
}
function revertBackgroundColor() {
    bdy.style.backgroundColor = "black";
}
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    bdy.style.backgroundColor = rndCol;
});
// arrowsRight[0].onclick = moveRight;
// arrowsLeft[0].onclick = moveLeft;

function left(value, index, array) {
    arrowsLeft[index].onclick = revertBackgroundColor;
}
function right(value, index, array) {
    array[index].onclick = changeBackgroundColor;
}
arrowsLeft.forEach(element => {
    // element.onclick = revertBackgroundColor;
    console.log(element.innerHTML)
});



function scrollLeft(arrow) {
    const i = document.id;
    const index = parseInt(i);

}

*/

