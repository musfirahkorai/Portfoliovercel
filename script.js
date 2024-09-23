document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    };

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    // Typewriter Effect
    const typewriter = () => {
        const element = document.querySelector('.typewriter span');
        const text = element.textContent;
        let index = 0;

        const typing = () => {
            if (index < text.length) {
                element.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(typing, 100); // Adjust speed here
            }
        };
        typing();
    };

    // Ensure typewriter effect runs after DOM is fully loaded
    if (document.querySelector('.typewriter span')) {
        typewriter();
    }

    // Responsive Navigation Menu
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = `<span></span><span></span><span></span>`;
    document.querySelector('.navbar').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        document.querySelector('.navbar ul').classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Scroll Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

});

document.addEventListener("DOMContentLoaded", function() {
    
    const anchors = document.querySelectorAll('a[href^="#"]');
  
    for (let anchor of anchors) {
      anchor.addEventListener("click", function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute("href");  
        const targetElement = document.querySelector(targetId); 
  
       
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  });
  

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value || 'No Subject'; 
    var message = document.getElementById('message').value;

    
    var mailtoLink = `mailto:musfirahkorai@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;


    window.location.href = mailtoLink;
});
