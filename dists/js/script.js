// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');

/* ========== MATCH SYSTEM - NEW ========== */

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500);
  }, 1100);
});


if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link, .btn-primary, .btn-secondary');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .why-card, .stat-box');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect - Add 'scrolled' class
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for enhanced shadow
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for stats card and feature badge
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const statsCard = document.querySelector('.stats-card');
    const featureBadge = document.querySelector('.feature-badge');
    
    if (statsCard) {
        const speed = 0.5;
        statsCard.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    }
    
    if (featureBadge) {
        const speed = -0.3;
        featureBadge.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    }
});