// ===========================
// Load Navbar
// ===========================
fetch("nav.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // Initialize navbar after HTML is inserted
        initNavbar();
    });

// ===========================
// Navbar Function
// ===========================
function initNavbar() {
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    if (!menuBtn || !sideMenu || !menuOverlay || !closeMenu) return;

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
    });

    function closeSideMenu() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    }

    closeMenu.addEventListener("click", closeSideMenu);
    menuOverlay.addEventListener("click", closeSideMenu);
}

// ===========================
// Load Footer
// ===========================
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });