function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const droplet = document.querySelector(".droplet");

    droplet.addEventListener("animationend", () => {
        container.classList.add("splash-active");
    });
});
