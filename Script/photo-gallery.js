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



const modal=document.getElementById("modal");

const preview=document.getElementById("preview");

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

modal.style.display="flex";

preview.src=img.src;

}

});

document.querySelector(".close").onclick=()=>{

modal.style.display="none";

}

modal.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

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