// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.querySelector(".clickable-image");
var modalImg = document.querySelector(".modal-image");
var captionText = document.querySelector(".modal-description");

img.onclick = function() {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}