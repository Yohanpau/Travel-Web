
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

      