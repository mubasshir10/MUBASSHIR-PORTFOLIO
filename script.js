// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


 src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"

  
  emailjs.init('kIMd7k70TjWeHQA8G'); 

  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs
      .sendForm('service_vqt1rp7', 'template_sdyzbjn', this)
      .then(
        function () {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.style.display = 'block';
          form.reset();
        },
        function (error) {
          console.error('Failed to send message:', error);
          alert('Error: Unable to send message. Please try again later.');
        }
      );
  });

  const experienceSection = document.querySelector('#experience');
  
  window.addEventListener('scroll', () => {
    const sectionPos = experienceSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;
    if (sectionPos < screenPos) {
      experienceSection.style.opacity = '1';
      experienceSection.style.transform = 'translateY(0)';
    }
  });

  document.querySelector('.download-btn').addEventListener('click', () => {
    console.log('Resume downloaded!');
  });
  
  
   src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"
<
  document.querySelector('.confetti-btn').addEventListener('click', function () {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });

  document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  });

  const blogPosts = [
    {
      title: "Understanding JavaScript Closures",
      snippet: "JavaScript is a powerful language that drives the modern web. Among its most fascinating and...",
      link: "https://www.blogger.com/blog/post/edit/8427185877886652754/2732984069251976913",
    },
    {
      title: "The Importance of Building a Personal Portfolio Website",
      snippet: "A personal portfolio is more than just a digital resume. It’s a dynamic, interactive space where you can...",
      link: "https://www.blogger.com/blog/post/edit/8427185877886652754/460927778352767204",
    },
    
  ];
  
  const blogContainer = document.querySelector(".blog-posts");
  
  blogPosts.forEach((post) => {
    const postHTML = `
      <article class="post">
        <h3>${post.title}</h3>
        <p>${post.snippet}</p>
        <a href="${post.link}" class="read-more">Read More</a>
      </article>
    `;
    blogContainer.innerHTML += postHTML;
  });
  