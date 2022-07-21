
let arrleft = document.getElementById('arrow-left');
let arrright = document.getElementById('arrow-right');
let list = document.getElementById('carousel__list');

arrleft.addEventListener("click", function() {
    console.log('[left] it works');
    list.style.transform += 'translateX(-171rem)';
})

arrright.addEventListener("click", function() {
    console.log('[right] it works');
    list.style.transform += 'translateX(171rem)';
})

