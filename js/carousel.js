
/* New Carousel */

let buttonleft = document.getElementById('button-left');
let buttonight = document.getElementById('button-right');
let list = document.getElementById('carousel__list');

/* Variables */

let container = document.querySelector('.carousel__container');
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

let item = document.querySelector('.carousel__item');
let itemWidth = item.offsetWidth;
let itemHeight = item.offsetHeight;
let items = document.querySelectorAll('.carousel__item');
let itemMargin = containerWidth * 0.01;
let position = 0;
let width = itemWidth;
let count = 3;

for (let item of items) {
    item.style.width = (containerWidth / count) + "px";
    item.style.height = (containerHeight / 1.3) + "px";
    item.style.margin = itemMargin + "px";
}

list.style.marginLeft = "0";
console.log(list.style.marginLeft);

buttonleft.addEventListener("click", function() {


})

buttonight.addEventListener("click", function() {


})


/* Image Cover */

let upscaleCover = document.getElementById('carousel-upscale__cover');
let upscaleImage = document.getElementById('carousel-upscale__image');
let cancelButton = document.getElementById('carousel-upscale__icon');

let secondItem = document.getElementById('second-item');

cancelButton.addEventListener('click', function() {
    upscaleCover.style.visibility = "hidden";
})


/* Item event target (For GIF's) */

list.onclick = function(event) {

    let item = event.target.closest('img');

    if (!item) return;
    else {

        console.log('0');
        let path = item.src;
        console.log(path);

        if (path.includes('png')){
            let newpath = path.replace('png','gif');
            upscaleImage.src = newpath;
        } else {
            upscaleImage.src = path;
        }

        upscaleCover.style.visibility = "visible";

        console.log(value);

    }

}



