
/* Upscaling Images */

let imagesContainer = document.getElementById("images_container")
let images = document.getElementsByClassName("images_image");

let imageUpscaleCover = document.getElementById('image-upscale_cover');
let imageUpscaleImage = document.getElementById('image-upscale_image');
let imageIcon = document.getElementById('image-upscale_icon')

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        imageUpscaleCover.style.visibility = "visible";
        imageUpscaleImage.src = images[i].src;
    })
}

imageIcon.addEventListener('click', function () {
    imageUpscaleCover.style.visibility = "hidden";
})
