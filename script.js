const scrollToTopButton = document.getElementById('scroll-to-top');
// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}       