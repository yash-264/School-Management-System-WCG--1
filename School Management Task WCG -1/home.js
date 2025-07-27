// Add fade-in effect on scroll
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

fadeIns.forEach(el => observer.observe(el));

AOS.init({
  duration: 1000,
  once: true
});

