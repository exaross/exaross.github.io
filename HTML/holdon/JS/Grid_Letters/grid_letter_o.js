
/* Letter O */

let letterElementsO = document.getElementsByClassName('tracks-grid-letter_element-o');
let elementsOLength = letterElementsO.length;

/* Generating random numbers and saving them into a new Array */

let myArrayO = [];
let randomNumberO = 14 + (Math.floor(Math.random() * elementsOLength));

    do {
        randomNumberO = 14 + (Math.floor(Math.random() * elementsOLength));
        if (myArrayO.includes(randomNumberO) == '0') {
            myArrayO.push(randomNumberO);
        } else {
            if (myArrayO.includes(randomNumberO) == '0') {
                randomNumberO = 14 + (Math.floor(Math.random() * elementsOLength));
                myArrayO.push(randomNumberO);
            }
        }
    }
    while (myArrayO.length !=elementsOLength);

/* Setting random background image for each element of the Grid Letter */

for (let i = 0; i < elementsOLength; i++) {
    // randomV = 1 + Math.floor(Math.random() * 4);
    // let imageBG = "url('/Images/Tracks/Track_BG_" + "V" + randomV + ".jpg')";
    let imageUrl = "url('/Images/Tracks/Track_" + myArrayO[i] + ".jpg')";
    letterElementsO[i].style.backgroundImage = imageUrl;
    letterElementsO[i].style.backgroundSize = "cover";
    let trackLinkToPage = document.createElement("a");
    trackLinkToPage.setAttribute("href","/HTML/tracks/track_" + myArrayO[i] + ".html");
    trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
    trackLinkToPage.setAttribute("target", "_blank");
    letterElementsO[i].appendChild(trackLinkToPage);
}

