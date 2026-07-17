// ==============================
// Navbar
// ==============================
function initNavbar() {
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    if (!menuBtn) return;

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });

    menuOverlay.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });
}

// ==============================
// Sort Dropdown
// ==============================
function initSort() {
    const sortToggle = document.getElementById("sortToggle");
    const sortMenu = document.getElementById("sortMenu");
    const sortLabel = document.getElementById("sortLabel");
    const sortOptions = document.querySelectorAll(".sort-option");
    const customSort = document.getElementById("customSort");

    if (!sortToggle) return;

    sortToggle.addEventListener("click", () => {
        sortMenu.classList.toggle("show");
    });

    sortOptions.forEach(option => {
        option.addEventListener("click", () => {
            sortOptions.forEach(item => item.classList.remove("active"));

            option.classList.add("active");
            sortLabel.textContent = option.dataset.value;
            sortMenu.classList.remove("show");
        });
    });

    document.addEventListener("click", (e) => {
        if (!customSort.contains(e.target)) {
            sortMenu.classList.remove("show");
        }
    });
}

// ==============================
// Filter Panel
// ==============================
function initFilter() {
    const filterBtn = document.getElementById("filterToggle");
    const filterPanel = document.getElementById("filterPanel");

    if (!filterBtn) return;

    filterBtn.addEventListener("click", () => {
        filterPanel.classList.toggle("show");
    });
}

// ==============================
// Clickable Cards
// ==============================
function initCards() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function (e) {

            if (e.target.closest(".heart")) return;

            window.location.href = this.dataset.href;
        });
    });
}

// ==============================
// Pagination
// ==============================
function initPagination() {

    const cards = document.querySelectorAll(".trips-cards .card");
    const pagination = document.getElementById("pagination");

    if (!pagination || cards.length === 0) return;

    const cardsPerPage = 9;
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    let currentPage = 1;

    function displayPage(page) {

        currentPage = page;

        cards.forEach((card, index) => {

            if (
                index >= (page - 1) * cardsPerPage &&
                index < page * cardsPerPage
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        createPagination();
    }

    function createPagination() {

        pagination.innerHTML = "";

        // Previous
        const prev = document.createElement("a");
        prev.href = "#";
        prev.className = "page-link";
        prev.textContent = "Previous";

        prev.onclick = (e) => {
            e.preventDefault();

            if (currentPage > 1) {
                displayPage(currentPage - 1);
            }
        };

        pagination.appendChild(prev);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {

            const page = document.createElement("a");

            page.href = "#";
            page.className = "page-number";
            page.textContent = i;

            if (i === currentPage) {
                page.classList.add("active");
            }

            page.onclick = (e) => {
                e.preventDefault();
                displayPage(i);
            };

            pagination.appendChild(page);
        }

        // Next
        const next = document.createElement("a");
        next.href = "#";
        next.className = "page-link";
        next.textContent = "Next";

        next.onclick = (e) => {
            e.preventDefault();

            if (currentPage < totalPages) {
                displayPage(currentPage + 1);
            }
        };

        pagination.appendChild(next);
    }

    displayPage(1);
}

// ==============================
// Load Navbar
// ==============================
fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        initNavbar();
    });

// ==============================
// Load Footer
// ==============================
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

// ==============================
// Initialize Everything
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    initSort();
    initFilter();
    initCards();
    initPagination();
});
