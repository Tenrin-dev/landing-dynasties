document.addEventListener('DOMContentLoaded', function() {
    // Server time functionality - showing IST as GMT
    function updateServerTime() {
        // Fixed time at 5:30 IST but displayed as GMT
        const hours = "05";
        const minutes = "30";
        const seconds = String(new Date().getSeconds()).padStart(2, '0');
        document.getElementById('server-time').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Update server time every second
    updateServerTime();
    setInterval(updateServerTime, 1000);
    
    // Modal functionality
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    const ctaBtn = document.querySelector('.cta-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    function openModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Allow scrolling
    }
    
    loginBtn.addEventListener('click', function() {
        openModal(loginModal);
    });
    
    registerBtn.addEventListener('click', function() {
        openModal(registerModal);
    });
    
    ctaBtn.addEventListener('click', function() {
        openModal(registerModal);
    });
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
    
    // Form submission prevention (for demo purposes)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('This is a demo. Form submission is disabled.');
        });
    });
    
    // Scroll animations
    const elements = document.querySelectorAll('.feature-card, .tour-step, .screenshot');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation elements
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check scroll position on load
    checkScroll();
    
    // Check scroll position on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Add hover effects for placeholder images
    const placeholderImages = document.querySelectorAll('.placeholder-image');
    
    placeholderImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
    });
});
