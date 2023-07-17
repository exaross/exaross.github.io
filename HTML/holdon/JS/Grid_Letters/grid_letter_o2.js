/* Letter O2 */

let letterElementsO2 = document.getElementsByClassName('tracks-grid-letter_element-o2');
let elementsO2Length = letterElementsO2.length;

/* Generating random numbers and saving them into a new Array */

let myArrayO2 = [];
let randomNumberO2 = 49 + (Math.floor(Math.random() * elementsO2Length));

    do {
        randomNumberO2 = 49 + (Math.floor(Math.random() * elementsO2Length));
        if (myArrayO2.includes(randomNumberO2) == '0') {
            myArrayO2.push(randomNumberO2);
        } else {
            if (myArrayO2.includes(randomNumberO2) == '0') {
                randomNumberO2 = 49 + (Math.floor(Math.random() * elementsO2Length));
                myArrayO2.push(randomNumberO2);
            }
        }
    }
    while (myArrayO2.length !=elementsO2Length);

/* Setting random background image for each element of the Grid Letter */

for (let i = 0; i < elementsO2Length; i++) {
    // randomV = 1 + Math.floor(Math.random() * 4);
    // let imageBG = "url('/Images/Tracks/Track_BG_" + "V" + randomV + ".jpg')";
    let imageUrl = "url('/Images/Tracks/Track_" + myArrayO2[i] + ".jpg')";
    letterElementsO2[i].style.backgroundImage = imageUrl;
    letterElementsO2[i].style.backgroundSize = "cover";
    let trackLinkToPage = document.createElement("a");
    trackLinkToPage.setAttribute("href","/HTML/tracks/track_" + myArrayO2[i] + ".html");
    trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
    trackLinkToPage.setAttribute("target", "_blank");
    letterElementsO2[i].appendChild(trackLinkToPage);
}

