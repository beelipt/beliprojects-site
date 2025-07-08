// Smooth scroll for anchor nav
document.querySelectorAll('.navbar-links a, .btn-dark').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero arrow scroll to Projects
document.getElementById('scrollProjects').onclick = function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};

// Scroll-to-top arrow
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > window.innerHeight/3 ? 'flex' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});

// FAQ accordion behavior
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    document.querySelectorAll('.faq-answer').forEach(a => {
      if(a !== answer) a.style.display = 'none';
    });
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Prevent default form submission (demo)
document.querySelector('.contact-form form').onsubmit = function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
};