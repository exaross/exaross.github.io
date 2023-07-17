
/* Letter L */

let letterElementsL = document.getElementsByClassName('tracks-grid-letter_element-l');
let elementsLLength = letterElementsL.length;

/* Generating random numbers and saving them into a new Array */

let myArrayL = [];
let randomNumberL= 30 + (Math.floor(Math.random() * elementsLLength));

    do {
        randomNumberL = 30 + (Math.floor(Math.random() * elementsLLength));
        if (myArrayL.includes(randomNumberL) == '0') {
            myArrayL.push(randomNumberL);
        } else {
            if (myArrayL.includes(randomNumberL) == '0') {
                randomNumberL = 30 + (Math.floor(Math.random() * elementsLLength));
                myArrayL.push(randomNumberL);
            }
        }
    }
    while (myArrayL.length !=elementsLLength);

/* Setting random background image for each element of the Grid Letter */

for (let i = 0; i < elementsLLength; i++) {
    // randomV = 1 + Math.floor(Math.random() * 4);
    // let imageBG = "url('/Images/Tracks/Track_BG_" + "V" + randomV + ".jpg')";
    let imageUrl = "url('/Images/Tracks/Track_" + myArrayL[i] + ".jpg')";
    letterElementsL[i].style.backgroundImage = imageUrl;
    letterElementsL[i].style.backgroundSize = "cover";
    let trackLinkToPage = document.createElement("a");
    trackLinkToPage.setAttribute("href","/HTML/tracks/track_" + myArrayL[i] + ".html");
    trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
    trackLinkToPage.setAttribute("target", "_blank");
    letterElementsL[i].appendChild(trackLinkToPage);
}

