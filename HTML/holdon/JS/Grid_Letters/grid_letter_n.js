/* Letter N */

let letterElementsN = document.getElementsByClassName('tracks-grid-letter_element-n');
let elementsNLength = letterElementsN.length;

/* Generating random numbers and saving them into a new Array */

let myArrayN = [];
let randomNumberN= 65 + (Math.floor(Math.random() * elementsNLength));

    do {
        randomNumberN = 65 + (Math.floor(Math.random() * elementsNLength));
        if (myArrayN.includes(randomNumberN) == '0') {
            myArrayN.push(randomNumberN);
        } else {
            if (myArrayN.includes(randomNumberN) == '0') {
                randomNumberN = 65 + (Math.floor(Math.random() * elementsNLength));
                myArrayN.push(randomNumberN);
            }
        }
    }
    while (myArrayN.length !=elementsNLength);

/* Setting random background image for each element of the Grid Letter */

for (let i = 0; i < elementsNLength; i++) {
    // randomV = 1 + Math.floor(Math.random() * 4);
    // let imageBG = "url('/Images/Tracks/Track_BG_" + "V" + randomV + ".jpg')";
    let imageUrl = "url('/Images/Tracks/Track_" + myArrayN[i] + ".jpg')";
    letterElementsN[i].style.backgroundImage = imageUrl;
    letterElementsN[i].style.backgroundSize = "cover";
    let trackLinkToPage = document.createElement("a");
    trackLinkToPage.setAttribute("href","/HTML/tracks/track_" + myArrayN[i] + ".html");
    trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
    trackLinkToPage.setAttribute("target", "_blank");
    letterElementsN[i].appendChild(trackLinkToPage);
}

