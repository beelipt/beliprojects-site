// Smooth scroll on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Show more about me (dynamic info)
document.getElementById('more-info-btn').addEventListener('click', () => {
  document.getElementById('info').textContent = "Passionate IT specialist, project-driven, eager to learn and always focused on delivering real value!";
});

// Dynamic projects (replace with your real projects)
const projects = [
  {
    name: "Personal Portfolio Website",
    description: "A responsive IT portfolio using Bootstrap and JavaScript.",
    link: "#"
  },
  {
    name: "Network Simulator",
    description: "A tool to simulate and visualize computer networks.",
    link: "#"
  },
  {
    name: "Cloud Cert Lab",
    description: "Lab project to study for Azure Fundamentals and CompTIA.",
    link: "#"
  }
];

const projectList = document.getElementById('project-list');
projects.forEach(proj => {
  projectList.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${proj.name}</h5>
          <p class="card-text">${proj.description}</p>
          <a href="${proj.link}" class="btn btn-outline-primary" target="_blank">View</a>
        </div>
      </div>
    </div>`;
});

// Simple contact form feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  document.getElementById('form-response').textContent =
    `Thank you! We'll contact you at ${email}.`;
});

// "Back to Top" button logic
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
