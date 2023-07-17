
/* Let's generate a random track cover for each letter of the Grid Letters */

/* Letters */

let letterElements = document.getElementsByClassName('tracks-grid-letter_element');
let elementsLength = letterElements.length + 1;

/* Generating random numbers and saving them into a new Array */

let myArray= [];
let randomNumber = 1 + Math.floor(Math.random() * elementsLength);

    do {
        randomNumber = Math.floor(Math.random() * elementsLength);
        if (myArray.includes(randomNumber) == '0') {
            myArray.push(randomNumber);
        } else {
            if (myArray.includes(randomNumber) == '0') {
                randomNumber = Math.floor(Math.random() * elementsLength);
                myArray.push(randomNumber);
            }
        } 
    }
    while (myArray.length != elementsLength);

/* Setting random background image for each element of the Grid Letter */

    for (let i = 0; i < elementsLength; i++) {
        let imageUrl = "url('../Images/Tracks/Small/Track_" + myArray[i] + ".jpg')";
        letterElements[i].style.backgroundImage = imageUrl;
        letterElements[i].style.backgroundSize = "cover";
        let trackLinkToPage = document.createElement("a");
        trackLinkToPage.setAttribute("href","../HTML/tracks/track_" + myArray[i] + ".html");
        trackLinkToPage.setAttribute("style", "width: 100%; height: 100%");
        trackLinkToPage.setAttribute("target", "_blank");
        letterElements[i].appendChild(trackLinkToPage);
    }

