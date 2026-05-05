// Dynamic Skills Data
const skills = [
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "PHP", icon: "fab fa-php", color: "#777bb4" },
    { name: "Java", icon: "fab fa-java", color: "#007396" },
    { name: "C / C++", icon: "fas fa-code", color: "#00599c" },
    { name: "HTML/CSS", icon: "fab fa-html5", color: "#e34f26" },
    { name: "Flutter", icon: "fas fa-mobile-alt", color: "#02569b" },
    { name: "SQL", icon: "fas fa-database", color: "#00bc4d" }
];

// Dynamic Projects Data
const projects = [
    {
        title: "CareSync Hospital System",
        desc: "Automated hospital management system with PHP and real-time MySQL integration.",
        tag: "Full Stack",
        icon: "fa-hospital-alt",
        link: "http://caresync.infinityfreeapp.com/login.php"
    },
    {
        title: "ULAB Recovery Portal",
        desc: "A lost-and-found recovery system built specifically for university campus usage.",
        tag: "Web App",
        icon: "fa-university",
        link: "http://ulab-recovery-portal.infinityfreeapp.com/login.php"
    },
    {
        title: "Eshop Web Project",
        desc: "Modern e-commerce platform with dynamic product grids and cart functionality.",
        tag: "PHP/CSS",
        icon: "fa-shopping-cart",
        link: "https://mdsalauddinyusuf.github.io/EshopWithHtmlCss"
    }
];

// Render Functions
function init() {
    const skillContainer = document.getElementById('skills-container');
    const projectContainer = document.getElementById('project-container');

    // Render Skills
    skills.forEach(skill => {
        skillContainer.innerHTML += `
            <div class="col-6 col-md-3 col-lg-2">
                <div class="skill-item">
                    <i class="${skill.icon} fa-2x mb-3" style="color: ${skill.color}"></i>
                    <h6 class="mb-0">${skill.name}</h6>
                </div>
            </div>
        `;
    });

    // Render Projects
    projects.forEach(proj => {
        projectContainer.innerHTML += `
            <div class="col-md-4">
                <div class="glass-card p-4 h-100">
                    <div class="text-accent mb-3"><i class="fas ${proj.icon} fa-2x"></i></div>
                    <span class="badge bg-secondary mb-2">${proj.tag}</span>
                    <h4 class="text-white">${proj.title}</h4>
                    <p class="text-light-50">${proj.desc}</p>
                    <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="btn btn-link text-accent p-0 mt-3 text-decoration-none fw-bold">
                        VIEW PROJECT <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.padding = "10px 0";
        nav.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        nav.style.padding = "15px 0";
        nav.style.background = "rgba(15, 23, 42, 0.8)";
    }
});

// Run
document.addEventListener('DOMContentLoaded', init);