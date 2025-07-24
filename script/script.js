// Auto-update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form fallback mechanism
document.getElementById('emailForm')?.addEventListener('submit', function(e) {
    // FormSubmit will handle submission
    console.log('Form submitted to FormSubmit');
    
    // Optional: Add mailto fallback if needed
    // window.location.href = `mailto:alexchira525@gmail.com?subject=${encodeURIComponent(subject)}&body=...`;
});

// Project card hover effects (optional)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});
