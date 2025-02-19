document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const footer = document.getElementById("footer");
    const menuToggle = document.getElementById("menu_toggle");
    const navMenu = document.getElementById("nav_menu");
    const navBar = document.getElementById("nav_bar");
    const homeLink = document.querySelector('a[href="#home"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const experienceLink = document.querySelector('a[href="#experience"]');

    // Set footer year
    footer.innerHTML = `<p>&copy; Copyright ${new Date().getFullYear()} | Marco Barrantes</p>`;

    // Event Listeners
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");

        if (navMenu.classList.contains("active")) {
            navBar.classList.remove("box_shadow");
        } else {
            navBar.classList.add("box_shadow");
        };
    });

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    experienceLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 10000, behavior: "smooth" });
    });
});
