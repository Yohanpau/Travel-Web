
fetch('../pages/visit.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('visit').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading visit.html:', error);
    });

document.querySelectorAll('.list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').split('#')[1]; // Get the target ID
      const targetElement = document.getElementById(targetId); // Find the target element
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
      }
    });
  });

  