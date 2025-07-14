// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile nav when clicking a nav link
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('active');
});

// Close mobile nav if clicking outside of it
document.addEventListener('click', (e) => {
  const isClickInside = navLinks.contains(e.target) || navToggle.contains(e.target);
  if (!isClickInside && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Close mobile nav on pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.focus();
  }
});
