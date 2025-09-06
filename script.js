// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    header.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        header.classList.remove('menu-open');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        header.classList.remove('menu-open');
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.hero-text, .hero-image, .about-image, .about-text, .portfolio-item, .gallery-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-text, .hero-image, .about-image, .about-text, .portfolio-item, .gallery-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)'; // Lebih kecil agar terasa cepat
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; // Durasi lebih cepat
        element.style.transitionDelay = `${index * 0.05}s`; // Delay antar elemen lebih cepat
    });
    
    // Trigger animation setelah sedikit delay
    setTimeout(animateOnScroll, 50);
});

// Sesuaikan padding top hero section berdasarkan tinggi header
function adjustHeroPadding() {
    if (window.innerWidth <= 768) {
        const header = document.getElementById('header');
        const hero = document.querySelector('.hero');
        const headerHeight = header.offsetHeight;
        
        hero.style.paddingTop = `${headerHeight + 20}px`;
    }
}

// Panggil saat load dan resize
window.addEventListener('load', adjustHeroPadding);
window.addEventListener('resize', adjustHeroPadding);

// Trigger animasi saat scroll
window.addEventListener('scroll', animateOnScroll);
