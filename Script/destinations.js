function initNavbar() {
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    if (!menuBtn) return;

    menuBtn.onclick = () => {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
    };

    closeMenu.onclick = () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    };

    menuOverlay.onclick = () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    };
}

fetch("nav.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;
    initNavbar();
});




    const sortToggle = document.getElementById('sortToggle');
    const sortMenu = document.getElementById('sortMenu');
    const sortLabel = document.getElementById('sortLabel');
    const sortOptions = document.querySelectorAll('.sort-option');

    sortToggle.addEventListener('click', () => {
        sortMenu.classList.toggle('show');
    });

    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            sortOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            sortLabel.textContent = option.dataset.value;
            sortMenu.classList.remove('show');
        });
    });

    document.addEventListener('click', (e) => {
        if (!document.getElementById('customSort').contains(e.target)) {
            sortMenu.classList.remove('show');
        }
    });


      document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function (e) {
          
            if (e.target.closest(".heart")) {
                return;
            }
            window.location.href = this.dataset.href;
        });
    });
});


fetch("footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;


    const filterBtn = document.getElementById("filterToggle");
const filterPanel = document.getElementById("filterPanel");

filterBtn.addEventListener("click", () => {
    filterPanel.classList.toggle("show");
});
});
