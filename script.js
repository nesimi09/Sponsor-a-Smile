

// Active Link beim Klicken + smooth scroll
const links = document.querySelectorAll('.menu li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Lang Toggle
document.querySelectorAll('.lang').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

