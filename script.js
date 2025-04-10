document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowBottom = window.innerHeight;
            if (sectionTop < windowBottom) {
                section.classList.add('fadeIn');
            }
        });
    });
});
