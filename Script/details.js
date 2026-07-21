// ==========================
// Load Navbar
// ==========================
fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        initNavbar();
    })
    .catch(error => console.error("Navbar loading failed:", error));


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
    menuBtn.addEventListener("click", function () {
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

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeSideMenu();
        }
    });

}


// ==========================
// Load Footer
// ==========================
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Footer loading failed:", error));



// ==========================
// jQuery
// ==========================
$(document).ready(function () {

    // Datepicker
    $("#from").datepicker({
        dateFormat: "dd M yy",
        minDate: 0,
        onSelect: function (selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });

    $("#to").datepicker({
        dateFormat: "dd M yy",
        minDate: 0
    });

    // Guest Select
    $("#guest").select2({
        minimumResultsForSearch: Infinity,
        width: "100%"
    });


    // ==========================
    // Related Tours Slider
    // ==========================
    const grid = document.getElementById("relatedGrid");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (grid && prevBtn && nextBtn) {

        const scrollAmount = 322;

        nextBtn.addEventListener("click", function () {
            grid.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });

        prevBtn.addEventListener("click", function () {
            grid.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

    }

});


const btn = document.getElementById("toggleItinerary");
const extraItems = document.querySelectorAll(".extra-item");

let expanded = false;

btn.addEventListener("click", () => {

    expanded = !expanded;

    extraItems.forEach(item => {
        item.classList.toggle("show", expanded);
    });

    btn.textContent = expanded ? "See Less" : "See More";

});