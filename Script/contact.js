// ==========================
// Load Navbar
// ==========================
fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        initNavbar();
    })
    .catch(error => console.error("Navbar failed to load:", error));


// ==========================
// Navbar Functions
// ==========================
function initNavbar() {

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    if (!menuBtn || !sideMenu || !menuOverlay || !closeMenu) {
        console.error("Navbar elements not found.");
        return;
    }

    // Open Menu
    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    // Close Menu
    function closeSideMenu() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeMenu.addEventListener("click", closeSideMenu);
    menuOverlay.addEventListener("click", closeSideMenu);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSideMenu();
        }
    });
}


// ==========================
// Run after page loads
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Sort Dropdown
    // ==========================
    const sortToggle = document.getElementById("sortToggle");
    const sortMenu = document.getElementById("sortMenu");
    const sortLabel = document.getElementById("sortLabel");
    const sortOptions = document.querySelectorAll(".sort-option");

    if (sortToggle && sortMenu) {

        sortToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            sortMenu.classList.toggle("show");
        });

        sortOptions.forEach(option => {
            option.addEventListener("click", () => {

                sortOptions.forEach(o => o.classList.remove("active"));

                option.classList.add("active");

                if (sortLabel) {
                    sortLabel.textContent = option.dataset.value;
                }

                sortMenu.classList.remove("show");
            });
        });

        document.addEventListener("click", () => {
            sortMenu.classList.remove("show");
        });
    }


    // ==========================
    // Filter Panel
    // ==========================
    const filterToggle = document.getElementById("filterToggle");
    const filterPanel = document.getElementById("filterPanel");

    if (filterToggle && filterPanel) {

        filterToggle.addEventListener("click", () => {
            filterPanel.classList.toggle("show");
        });

    }


    // ==========================
    // Destination Cards
    // ==========================
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("click", function (e) {

            if (e.target.closest(".heart")) return;

            const url = this.dataset.href;

            if (url) {
                window.location.href = url;
            }

        });

    });

});


// ==========================
// Load Footer
// ==========================
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Footer failed to load:", error));