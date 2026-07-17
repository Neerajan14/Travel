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
       


            const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {
            if (other !== item) {
                other.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});


     fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });