function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    modal.querySelector('.modal-content').style.animation = "fadeInContent 0.5s forwards";
}

const images = document.querySelectorAll('.clickable-image');
images.forEach((image, index) => {
    image.addEventListener('click', function() {
        openModal('modal' + (index + 1));
    });
});

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        closeModal('modal' + (index + 1));
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
    }
};
