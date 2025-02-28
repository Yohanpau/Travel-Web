function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}


const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("mouseover", () => {
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
  panel.addEventListener('mouseover', () => {
    panels.forEach((p) => p.classList.remove('active'));
    panel.classList.add('active');
    updateBackgroundImage(panel);
  });
});

const initialActivePanel = document.querySelector('.panel.active');
if (initialActivePanel) {
  updateBackgroundImage(initialActivePanel);
}

// Detect scroll event
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  // When the page is scrolled down by 50px or more, add the 'scrolled' class
  if (window.scrollY > 600) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
