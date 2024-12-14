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

// Observing Animate on Scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add('opacity-100', 'animate-slideinright');
            }
        });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
);

const target = document.getElementById('animate-me');
observer.observe(target);