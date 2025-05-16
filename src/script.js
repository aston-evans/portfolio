import anime from 'animejs/lib/anime.es.js'; // may use in the future

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload

    let alertBox = document.getElementById("alertMessage");
    alertBox.style.display = "block"; // Show message

    setTimeout(() => {
        alertBox.style.display = "none"; // Hide message after 3 seconds
    }, 3000);
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offsetTop = rect.top;
        const offsetBottom = rect.bottom;

        // Detect contact section
        if ((offsetTop <= 120 && offsetBottom >= 120) ||
            (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5 && section.id === 'contact')) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});



/*
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    toggle.textContent = '🌙';
  } else {
    document.body.classList.remove('light-mode');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    const isLightMode = document.body.classList.contains('light-mode');

    if (isLightMode) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      toggle.textContent = '☀️';
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      toggle.textContent = '🌙';
    }
  });
});

*/