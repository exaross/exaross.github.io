
/* New Carousel */

<<<<<<< HEAD
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
=======

let arrleft = document.getElementById('arrow-left');
let arright = document.getElementById('arrow-right');
let list = document.getElementById('carousel__list');


/* Variables for Adaptive */

let carouselContainer = document.querySelector('.carousel__container');
let carouselContainerWidth = carouselContainer.offsetWidth;
let carouselContainerHeight = carouselContainer.offsetHeight;
let carouselItem = document.querySelector('.carousel__item');
let carouselItemWidth = carouselItem.offsetWidth;
let carouselItemHeight = carouselItem.offsetHeight;
let carouselItems = document.querySelectorAll('.carousel__item');

let width = carouselItemWidth;
let count = 3;
let space = 207;
let position = 0;



list.style.marginLeft = "0";
/* list.style.transform = 'translateX(100px)'; */
>>>>>>> a32aa9c190ccfeb25b069fceb64b23ea33260548
console.log(list.style.marginLeft);

buttonleft.addEventListener("click", function() {


})

buttonight.addEventListener("click", function() {

<<<<<<< HEAD
=======
    carouselContainer.style.width = "380px";
    console.log(carouselContainerWidth);
    console.log(carouselItemWidth);

    if (carouselContainerWidth >= '380') {
        for (let item of carouselItems) {
            item.style.width = (carouselContainerWidth / 2) + "px";
        }
        count = 1;
        space = 20;
        position -= (carouselItemWidth * count) + space;
        list.style.marginLeft = position + "px";
    }


/*     console.log(list.style.marginLeft);

    position -= (width * count) + space;

    list.style.marginLeft = position + "px"; */


    arrleft.style.visibility = "visible";



    /* Check and On/Off buttons */

    if (list.style.marginLeft <= '-1707') {
        arrleft.style.visibility = "visible";
    }

    if (list.style.marginLeft >= '-3400') {
        arright.style.visibility = "hidden";
    }
>>>>>>> a32aa9c190ccfeb25b069fceb64b23ea33260548

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



