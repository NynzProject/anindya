const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    header.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        header.classList.remove('menu-open');
    });
});

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        navLinks.classList.remove('active');
        header.classList.remove('menu-open');
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-text, .hero-image, .about-image, .about-text, .portfolio-item, .gallery-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        element.style.transitionDelay = `${index * 0.05}s`;
    });
    
    setTimeout(animateOnScroll, 50);
});

function adjustHeroPadding() {
    if (window.innerWidth <= 768) {
        const header = document.getElementById('header');
        const hero = document.querySelector('.hero');
        const headerHeight = header.offsetHeight;
        
        hero.style.paddingTop = `${headerHeight + 20}px`;
    }
}

window.addEventListener('load', adjustHeroPadding);
window.addEventListener('resize', adjustHeroPadding);
window.addEventListener('scroll', animateOnScroll);