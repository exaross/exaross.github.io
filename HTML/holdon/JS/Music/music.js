
let musicTracksItems = document.getElementsByClassName('music-tracks_item');
let musicTracksItemsLength = musicTracksItems.length;

for (let i = 0; i < musicTracksItemsLength; i++) {
    let imageURL = "url('../Images/Tracks/Track_" + i + ".jpg')";
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