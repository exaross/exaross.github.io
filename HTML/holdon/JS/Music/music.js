
let musicTracksItems = document.getElementsByClassName('music-tracks_item');
let musicTracksItemsLength = musicTracksItems.length;

for (let i = 0; i < musicTracksItemsLength; i++) {
    let imageURL = "url('../Images/Tracks/Small/Track_" + i + ".jpg')";
    musicTracksItems[i].style.backgroundImage = imageURL;
    musicTracksItems[i].style.backgroundSize = "cover";
    let trackLinkToPage = document.createElement("a");
    trackLinkToPage.setAttribute("href","../HTML/tracks/track_" + i + ".html");
    trackLinkToPage.setAttribute("class", "trackLinkPage");
    trackLinkToPage.setAttribute("target", "_blank");
    musicTracksItems[i].appendChild(trackLinkToPage);
    let trackImage = document.createElement("img");
    trackImage.setAttribute("class", "trackImage");
    trackLinkToPage.appendChild(trackImage);
}

// let showMore = document.getElementById('music-tracks_button');
// let musicContainer = document.getElementById('music-tracks_container');

// showMore.addEventListener(onclick, function() {
//     musicContainer.style.height = "90%";
//     console.log("1");
// })