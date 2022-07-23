
/* Carousel Animation */

/* let width = 50;
let count = 3;
let position = 0;

let arrleft = document.getElementById('arrow-left');
let arright = document.getElementById('arrow-right');
let list = document.getElementById('carousel__list');

arrleft.addEventListener("click", function() {
    console.log('[left] it works');
    list.style.transform += 'translateX(171rem)';
})

arright.addEventListener("click", function() {
    console.log('[right] it works');
    list.style.transform += 'translateX(-171rem)';
    arrleft.style.visibility = "visible";
}) */

/* New Carousel */
/* Carousel Animation */

let width = 500;
let count = 3;
let space = 207;
let position = 0;

let arrleft = document.getElementById('arrow-left');
let arright = document.getElementById('arrow-right');
let list = document.getElementById('carousel__list');

list.style.marginLeft = "0";
list.style.transform = 'translateX(100px)';
console.log(list.style.marginLeft);

arrleft.addEventListener("click", function() {

    position += (width * count) + space;

    console.log(position);
    console.log(list.style.marginLeft);

    list.style.marginLeft = position + "px";


    /* Check and On/Off buttons */
    
    if(list.style.marginLeft >= '0') {
        arrleft.style.visibility = "hidden";
    }

    if (list.style.marginLeft <= '-3400') {
        arright.style.visibility = "visible";
    }


})

arright.addEventListener("click", function() {

    console.log(list.style.marginLeft);

    position -= (width * count) + space;

    list.style.marginLeft = position + "px";

    arrleft.style.visibility = "visible";

    
    /* Check and On/Off buttons */

    if (list.style.marginLeft <= '-1707') {
        arrleft.style.visibility = "visible";
    }

    if (list.style.marginLeft >= '-3400') {
        arright.style.visibility = "hidden";
    }

})


/* Image Cover */

let upscaleCover = document.getElementById('carousel-upscale__cover');
let upscaleImage = document.getElementById('carousel-upscale__image');
let cancelButton = document.getElementById('carousel-upscale__icon');

let secondItem = document.getElementById('second-item');

cancelButton.addEventListener('click', function() {
    upscaleCover.style.visibility = "hidden";
})

/* secondItem.addEventListener('click', function() {
    upscaleCover.style.visibility = "visible";
}) */


/* Item event target */

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

/* New Carousel */



