
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:alexchira525@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
        )}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Optional: Show confirmation message
        alert('Your email client will open. Please send the pre-filled email to contact me.');
        
        // Optional: Reset form
        this.reset();
    });
    setTimeout(function() {
        alert("If your email client didn't open, please manually email me at alexchira525@gmail.com");
    }, 3000);
