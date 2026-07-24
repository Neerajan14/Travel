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



/* IMAGE */

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

document.querySelectorAll(".gallery-img").forEach(img=>{

    img.onclick=()=>{

        imageModal.style.display="flex";

        modalImage.src=img.src;

    }

});

document.querySelector(".close").onclick=()=>{

    imageModal.style.display="none";

};

imageModal.onclick=(e)=>{

    if(e.target===imageModal){

        imageModal.style.display="none";

    }

};


/* VIDEO */

const videoModal=document.getElementById("videoModal");

const player=document.getElementById("youtubePlayer");

document.querySelectorAll(".video-card").forEach(card=>{

    card.onclick=()=>{

        const id=card.dataset.video;

        player.src=`https://www.youtube.com/embed/${id}?autoplay=1`;

        videoModal.style.display="flex";

    }

});

document.querySelector(".close-video").onclick=()=>{

    videoModal.style.display="none";

    player.src="";

};

videoModal.onclick=(e)=>{

    if(e.target===videoModal){

        videoModal.style.display="none";

        player.src="";

    }

};


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