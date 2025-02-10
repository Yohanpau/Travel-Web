var modal = document.getElementById("myModal");

var img = document.querySelector(".clickable-image");
var modalImg = document.querySelector(".modal-image");
var captionText = document.querySelector(".modal-description");

img.onclick = function() {
    modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active"); 
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
