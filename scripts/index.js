

// 1. Importar el plugin de Typed.js
var typed = new Typed(".auto-type", {
    strings: [
        "Frontend",
        "Backend",
        "Full Stack",
        "de Aplicaciones Móviles",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
})

const toggleBtn = document.getElementById("nav-menu-toggle");
const mobileMenu = document.querySelector(".nav-links-mobile");

toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link-mobile").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

document.querySelectorAll('.skills-progress-bar').forEach(bar => {
    const progress = bar.style.getPropertyValue('--progress');
    const fill = bar.querySelector('.skills-progress-fill');
    setTimeout(() => {
        fill.style.width = progress;
    }, 100);
});
