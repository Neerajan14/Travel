// Navbar
fetch("nav.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        initNavbar();
    });

// Sort (only if the page has it)
const sortToggle = document.getElementById("sortToggle");

if (sortToggle) {
    const sortMenu = document.getElementById("sortMenu");
    const sortLabel = document.getElementById("sortLabel");
    const sortOptions = document.querySelectorAll(".sort-option");

    sortToggle.addEventListener("click", () => {
        sortMenu.classList.toggle("show");
    });

    sortOptions.forEach(option => {
        option.addEventListener("click", () => {
            sortOptions.forEach(o => o.classList.remove("active"));
            option.classList.add("active");
            sortLabel.textContent = option.dataset.value;
            sortMenu.classList.remove("show");
        });
    });

    document.addEventListener("click", (e) => {
        const customSort = document.getElementById("customSort");
        if (customSort && !customSort.contains(e.target)) {
            sortMenu.classList.remove("show");
        }
    });
}

// Cards (only if they exist)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function (e) {
        if (e.target.closest(".heart")) return;
        window.location.href = this.dataset.href;
    });
});

// Footer
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });