
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

const imgContainer = document.querySelector('.img-container');

function updateBackgroundImage(panel) {
  const backgroundImage = panel.style.backgroundImage; 
  imgContainer.style.backgroundImage = backgroundImage; 
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panels.forEach((p) => p.classList.remove('active'));
    panel.classList.add('active');
    updateBackgroundImage(panel);
  });
});

const initialActivePanel = document.querySelector('.panel.active');
if (initialActivePanel) {
  updateBackgroundImage(initialActivePanel);
}
