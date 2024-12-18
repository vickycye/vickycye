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

// slide in observe
const slideobserve = new IntersectionObserver(
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

// fade in observe
const fadeobserve = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add('opacity-100', 'animate-fadeOut')
            }
        })
    }
)

const target = document.getElementById('animate-me');
const target2 = document.getElementById('about-me');
const project = document.getElementById('project-title');
const moreAboutMe = document.getElementById('more-info-title');
const favSongs = document.getElementById('fav-songs');

slideobserve.observe(target);
fadeobserve.observe(target2);
slideobserve.observe(project);
slideobserve.observe(moreAboutMe);
slideobserve.observe(favSongs);