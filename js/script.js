// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideNav.classList.toggle('active');
});

// Close side nav when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !sideNav.contains(e.target)) {
        hamburger.classList.remove('active');
        sideNav.classList.remove('active');
    }
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        // Don't close hamburger menu when opening modal
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    
    // If closing the notAddedModal, also close the gamesListModal
    if (modalId === 'notAddedModal') {
        const gamesListModal = document.getElementById('gamesListModal');
        gamesListModal.classList.remove('active', 'right-side');
        modal.classList.remove('sliding');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        // Find which modal was clicked and close it properly
        const modalId = e.target.id;
        closeModal(modalId);
    }
});

// Contact Form Submission (if contact form exists)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        closeModal('contactModal');
        contactForm.reset();
    });
}

// Animate blog cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

document.querySelectorAll('.blog-card').forEach(card => {
    observer.observe(card);
});

// Add hover effects to news cards and review sections
document.querySelectorAll('.news-card, .review-section').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form input animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Update time and date
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById('currentTime').textContent = `${dateString} ${timeString}`;
}

// Update time every second
updateTime();
setInterval(updateTime, 1000);

// Split Modal Functions
function openSplitModal() {
    const currentModal = document.getElementById('notAddedModal');
    const gamesListModal = document.getElementById('gamesListModal');

    // Add sliding class to current modal
    currentModal.classList.add('sliding');

    // Show and position the games list modal
    gamesListModal.classList.add('active', 'right-side');


    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active', 'sliding', 'right-side');
    });
    // Hide split modal overlay if present
    document.body.style.overflow = 'auto';
}
