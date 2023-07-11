const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");
const cadreImgs = document.querySelectorAll(".cadre-img");
const moviesImgs = document.querySelectorAll(".movies-images");
// const vignettes = document.querySelectorAll(".vignette");

const scrollingWidth = cadreImgs[0].clientWidth + 3;

// Horizontal scrolling

function moveRight(i) {
    moviesImgs[i].scrollLeft += scrollingWidth;
}


function moveLeft(i) {
    moviesImgs[i].scrollLeft -= scrollingWidth;
}


for (let i of [0, 1, 2, 3]) {
    arrowsRight[i].onclick = function () {
        moveRight(i)

    };
    arrowsLeft[i].onclick = function () {
        moveLeft(i);
    };
}