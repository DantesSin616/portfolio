document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    var theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    
    var toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        toggleBtn.addEventListener('click', function() {
            theme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        });
    }
    
    // Mobile menu
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Contact form
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            var statusEl = document.getElementById('form-status');
            var submitBtn = form.querySelector('.form-submit');
            
            if (!name || !email || !message) {
                statusEl.textContent = 'Please fill in all fields.';
                statusEl.className = 'form-status error';
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                statusEl.textContent = 'Please enter a valid email.';
                statusEl.className = 'form-status error';
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            var subject = encodeURIComponent('Portfolio Contact: ' + name);
            var body = encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message);
            window.location.href = 'mailto:gdeywarvzla@gmail.com?subject=' + subject + '&body=' + body;
            
            statusEl.textContent = 'Email client opened!';
            statusEl.className = 'form-status success';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            form.reset();
        });
    }
});