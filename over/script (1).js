
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    });
