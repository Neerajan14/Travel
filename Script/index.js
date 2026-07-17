// ===== Slide-in menu =====
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  function openMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
  }

  function closeMenuPanel() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (closeMenu) closeMenu.addEventListener('click', closeMenuPanel);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenuPanel);


  // ===== Mobile search toggle =====
  const mobileSearchToggle = document.getElementById('mobileSearchToggle');
  const mobileSearchBar = document.getElementById('mobileSearchBar');

  if (mobileSearchToggle && mobileSearchBar) {
    mobileSearchToggle.addEventListener('click', function (e) {
      e.preventDefault();
      mobileSearchBar.classList.toggle('active');
      if (mobileSearchBar.classList.contains('active')) {
        mobileSearchBar.querySelector('input').focus();
      }
    });
  }


  // ===== Desktop search box toggle =====
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function () {
      searchInput.classList.toggle("active");
      if (searchInput.classList.contains("active")) {
        searchInput.focus();
      }
    });
  }


  // ===== Featured trips category filter =====
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".categories button");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filter = this.dataset.filter;

        cards.forEach(card => {
          card.style.display = card.dataset.category === filter ? "block" : "none";
        });
      });
    });
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


// ===== jQuery Datepicker & Tour Type =====
$(document).ready(function () {

    // Calendar
    $("#tourDate").datepicker({
        dateFormat: "dd M yy",
        minDate: 0
    });

    // Tour Type
    $("#tourType").select2({
        placeholder: "Select Tour Type",
        allowClear: true,
        width: "100%"
    });

});
