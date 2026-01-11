document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        messageDiv.innerHTML = '';
        submitButton.disabled = true;
        submitButton.innerText = 'Sending...';

        // Send the form via EmailJS
        emailjs.sendForm('service_ynauehg', 'template_ump0jmq', this)
        .then(function() {
            messageDiv.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
            form.reset();
            submitButton.disabled = false;
            submitButton.innerText = 'Send Message';
        }, function(error) {
            console.log('FAILED...', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong.</div>';
            submitButton.disabled = false;
            submitButton.innerText = 'Send Message';
        });
    });
});
  const carousel = document.querySelector('#testimonialCarousel');
  new bootstrap.Carousel(carousel, {
    interval: 3000,
    pause: 'hover'
  });

