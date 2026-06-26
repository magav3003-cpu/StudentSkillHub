document.addEventListener('DOMContentLoaded', () => {
    // Mobile Responsive Menu Toggle Logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Contact Form Interactive Validation Validation
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            
            // Render positive interactive UI update
            formFeedback.textContent = `Thank you, ${name}! Your message was successfully intercepted by the mock server.`;
            formFeedback.classList.remove('hidden');
            formFeedback.classList.add('success');
            
            contactForm.reset();
        });
    }
});
