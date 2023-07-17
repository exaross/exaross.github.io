/* Letter D */

let letterElementsD = document.getElementsByClassName('tracks-grid-letter_element-d');
let elementsDLength = letterElementsD.length;

/* Generating random numbers and saving them into a new Array */

let myArrayD = [];
let randomNumberD= 39 + (Math.floor(Math.random() * elementsDLength));

    do {
        randomNumberD = 39 + (Math.floor(Math.random() * elementsDLength));
        if (myArrayD.includes(randomNumberD) == '0') {
            myArrayD.push(randomNumberD);
        } else {
            if (myArrayD.includes(randomNumberD) == '0') {
                randomNumberD = 39 + (Math.floor(Math.random() * elementsDLength));
                myArrayD.push(randomNumberD);
            }
        }
    }
    while (myArrayD.length !=elementsDLength);

/* Setting random background image for each element of the Grid Letter */

for (let i = 0; i < elementsDLength; i++) {
    // randomV = 1 + Math.floor(Math.random() * 4);
    // let imageBG = "url('/Images/Tracks/Track_BG_" + "V" + randomV + ".jpg')";
    let imageUrl = "url('/HTML/Images/Tracks/Track_" + myArrayD[i] + ".jpg')";
    letterElementsD[i].style.backgroundImage = imageUrl;
    letterElementsD[i].style.backgroundSize = "cover";
    let trackLinkToPage = document.createElement("a");
    trackLinkToPage.setAttribute("href","/HTML/tracks/track_" + myArrayD[i] + ".html");
    trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
    trackLinkToPage.setAttribute("target", "_blank");
    letterElementsD[i].appendChild(trackLinkToPage);
}