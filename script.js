

const links = document.querySelectorAll('.menu li a');
const sections = document.querySelectorAll('section[id]');

// --- Scroll-based active section highlighting ---
function updateActiveOnScroll() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveOnScroll);
updateActiveOnScroll();

// click still works for immediate feedback
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// sprache
let currentLang = 'de';

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-de][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });
    document.documentElement.lang = lang === 'de' ? 'de' : 'en';
}

document.querySelectorAll('.lang').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        switchLanguage(this.getAttribute('data-lang'));
    });
});

// --- Logo hover: swap image ---
const logoLink = document.querySelector('.logo-link');
const logoImg = logoLink.querySelector('.logo-img');
const originalSrc = logoImg.src;

logoLink.addEventListener('mouseenter', () => {
    logoImg.src = 'Bilder/logo.png';
});
logoLink.addEventListener('mouseleave', () => {
    logoImg.src = originalSrc;
});

