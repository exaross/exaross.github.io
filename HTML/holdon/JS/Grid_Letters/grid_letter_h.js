
/* Let's generate a random track cover for each letter of the Grid Letters */

/* Letter H */

let letterElementsH = document.getElementsByClassName('tracks-grid-letter_element-h');
let elementsHLength = letterElementsH.length + 1;

/* Generating random numbers and saving them into a new Array */

let myArrayH = [];
let randomNumberH = 1 + Math.floor(Math.random() * elementsHLength);

    do {
        randomNumberH = Math.floor(Math.random() * elementsHLength);
        if (myArrayH.includes(randomNumberH) == '0') {
            myArrayH.push(randomNumberH);
        } else {
            if (myArrayH.includes(randomNumberH) == '0') {
                randomNumberH = Math.floor(Math.random() * elementsHLength);
                myArrayH.push(randomNumberH);
            }
        } 
    }
    while (myArrayH.length != elementsHLength);

/* Setting random background image for each element of the Grid Letter */

    for (let i = 0; i < elementsHLength; i++) {
        // randomV = 1 + Math.floor(Math.random() * 4);
        // let imageBG = "url('/Images/Tracks/Track_BG_" + "V" + randomV + ".jpg')";
        let imageUrl = "url('/Images/Tracks/Track_" + myArrayH[i] + ".jpg')";
        letterElementsH[i].style.backgroundImage = imageUrl;
        letterElementsH[i].style.backgroundSize = "cover";
        let trackLinkToPage = document.createElement("a");
        trackLinkToPage.setAttribute("href","/HTML/tracks/track_" + myArrayH[i] + ".html");
        trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
        trackLinkToPage.setAttribute("target", "_blank");
        letterElementsH[i].appendChild(trackLinkToPage);
    }

