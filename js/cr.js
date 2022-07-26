/* Elements */

let box = document.querySelector('.cr-box');
let boxWidth = box.offsetWidth;
let boxHeight = box.offsetHeight;

let list = document.querySelector('.cr-list');
let listWidth = list.offsetWidth;
let elements = document.querySelectorAll('.cr-element');
let element = document.querySelector('.cr-element');
let elementWidth = element.offsetWidth;
let elementMargin = boxWidth * 0.01;

/* Buttons */

let leftButton = document.querySelector('.button-left');
let rightButton = document.querySelector('.button-right');
let position = 0;
let count = 3;

for (let element of elements) {
    element.style.width = (boxWidth / count) + "px";
    element.style.height = (boxHeight / 1.4) + "px";
    element.style.margin = elementMargin + "px";
}

rightButton.addEventListener('click', function() {

    for (let element of elements) {
        element.style.width = (boxWidth / count) + "px";
        element.style.height = (boxHeight / 1.4) + "px";
        element.style.margin = elementMargin + "px";
    }

    let elementWidth = element.offsetWidth;
        position -= elementWidth + (elementMargin * 2);
        list.style.marginLeft = position + "px";

        leftButton.style.visibility = "visible";

        let checkValue = ((elementWidth + elementMargin) * 6) * (-1);
        if (position <= checkValue) {
        rightButton.style.visibility = "hidden";
        }
})

leftButton.addEventListener('click', function() {

    for (let element of elements) {
        element.style.width = (boxWidth / count) + "px";
        element.style.height = (boxHeight / 1.4) + "px";
        element.style.margin = elementMargin + "px";
    }

    let elementWidth = element.offsetWidth;
        position += elementWidth + (elementMargin * 2);
        list.style.marginLeft = position + "px";

        rightButton.style.visibility = "visible";

        let checkValue = 0;
        if (position == checkValue) {
        leftButton.style.visibility = "hidden";
        }

})

/* Image Cover */

let upscaleCover = document.getElementById('upscale__cover');
let upscaleImage = document.getElementById('upscale__image');
let cancelButton = document.getElementById('upscale__icon');

let secondItem = document.getElementById('second-item');

cancelButton.addEventListener('click', function() {
    upscaleCover.style.visibility = "hidden";
})


/* Item event target (For GIF's) */

list.onclick = function(event) {
    let item = event.target.closest('img');

    if (!item) return;
    else {

        let path = item.src;
        if (path.includes('png')){
            let newpath = path.replace('png','gif');
            upscaleImage.src = newpath;
        } else {
            upscaleImage.src = path;
        }
        upscaleCover.style.visibility = "visible";
    }
}

list.onmouseover = function(event) {

    let item = event.target.closest('img');
    if (!item) return;
    else {
        let path = item.src;

        if (path.includes('png')){
            let newpath = path.replace('png','gif');
            upscaleImage.src = newpath;
            item.src = newpath;
        } else {
            upscaleImage.src = path;
            item.src = path;
        }
    }
}

list.onmouseout = function(event) {
    let item = event.target.closest('img');
    if (!item) return;
    else {
        let path = item.src;

        if (path.includes('gif')){
            let newpath = path.replace('gif','png');
            item.src = newpath;
        } else {
            item.src = path;
        }
    }
}
