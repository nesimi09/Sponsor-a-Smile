const links = document.querySelectorAll('.menu li a'); 
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active')); 
        this.classList.add('active'); 
    });
});
