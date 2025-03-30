import anime from 'animejs/lib/anime.es.js';

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let alertBox = document.getElementById("alertMessage");
    alertBox.style.display = "block"; // Show message

    setTimeout(() => {
        alertBox.style.display = "none"; // Hide message after 3 seconds
    }, 3000);
});
