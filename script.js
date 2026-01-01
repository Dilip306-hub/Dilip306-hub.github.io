// ============ Mobile Menu Toggle ============
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ============ Smooth Scroll Navigation ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navMenu) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// ============ Navbar Background on Scroll ============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============ Intersection Observer for Animations ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============ Contact Links Interaction ============
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px) scale(1)';
    });
});

// ============ Project Card Hover Effect ============
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============ Skill Tags Animation ============
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.4)';
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
        this.style.transform = 'scale(1)';
    });
});

// ============ Dynamic Year Update ============
const yearElement = document.createElement('span');
const currentYear = new Date().getFullYear();
if (document.querySelector('.footer p')) {
    document.querySelector('.footer p').textContent = 
        `Made with ❤️ by Dilip Reddy | © ${currentYear}`;
}

// ============ Page Load Animation ============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease-in';
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .about-card, .project-card {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
`;
document.head.appendChild(style);

// ============ Button Click Effects ============
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// ============ Responsive Menu Close on Resize ============
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.style.display = 'flex';
    }
});

console.log('Portfolio script loaded successfully!');
