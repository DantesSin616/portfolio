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

    // Blog posts data for listing
    var blogPosts = [
        {
            id: 'sql-injection-guide',
            title: 'SQL Injection: The Silent Threat',
            date: '2026-04-20',
            excerpt: 'SQL Injection is one of the most dangerous vulnerabilities in web application security. It allows attackers to interfere with queries that an application makes to its database.',
            tags: ['Cybersecurity', 'Web Security']
        },
        {
            id: 'xss-prevention',
            title: 'Cross-Site Scripting (XSS) Defense',
            date: '2026-04-15',
            excerpt: 'Cross-Site Scripting (XSS) attacks inject malicious scripts into trusted websites. Here&rsquo;s how to defend against them.',
            tags: ['Cybersecurity', 'Web Security']
        },
        {
            id: 'python-microservices',
            title: 'Building Microservices with Python & FastAPI',
            date: '2026-04-10',
            excerpt: 'FastAPI has become one of the most popular Python frameworks for building microservices. Here&rsquo;s a guide on architecture patterns and best practices.',
            tags: ['Software Engineering', 'Backend']
        }
    ];

    // Render blog posts to the listing page
    function renderBlogPosts() {
        var blogList = document.getElementById('blog-posts');
        if (!blogList) return;

        blogList.innerHTML = ''; // Clear existing content

        blogPosts.forEach(function(post) {
            var postElement = document.createElement('div');
            postElement.className = 'blog-post-item';
            postElement.innerHTML = `
                <h3><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
                <p class="blog-post-date">${post.date}</p>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-post-tags">
                    ${post.tags.map(function(tag) {
                        return '<span class="tag">' + tag + '</span>';
                    }).join('')}
                </div>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read more &rarr;</a>
            `;
            blogList.appendChild(postElement);
        });
    }

    // Call renderBlogPosts on DOM load
    renderBlogPosts();

    // Cursor blinking for terminal effect
    setInterval(function() {
        var cursors = document.querySelectorAll('.cursor');
        cursors.forEach(function(cursor) {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        });
    }, 500);
});