// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Booking modal functions
function openBookingModal() {
    document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('bookingModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('bookingModal')) {
        closeBookingModal();
    }
});

// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.padding = '15px 0';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.padding = '20px 0';
    }
});

// Image error handling
document.querySelectorAll('img').forEach(img => {
    img.onerror = function () {
        this.style.display = 'none';
        this.parentElement.style.background = '#f0f0f0';
        this.parentElement.style.display = 'flex';
        this.parentElement.style.alignItems = 'center';
        this.parentElement.style.justifyContent = 'center';
        this.parentElement.innerHTML = '<div style="text-align: center; padding: 20px; color: #666;">Image not available</div>';
    };
});

// --- New: Scroll-triggered animations ---
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // You can uncomment the next line to stop observing after the first animation
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.fade-up, .slide-left, .slide-right, .fade-in');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});