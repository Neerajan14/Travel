const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();

    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
        searchInput.focus();
    }
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) {
        searchBox.classList.remove("active");
    }
});



const mobileSearchBar = document.getElementById("mobileSearchBar");
const mobileSearchIcon = document.getElementById("mobileSearchIcon");
const mobileSearchInput = document.getElementById("mobileSearchInput");

if (mobileSearchBar && mobileSearchIcon && mobileSearchInput) {
    mobileSearchIcon.addEventListener("click", function (e) {
        e.stopPropagation();

        mobileSearchBar.classList.toggle("active");

        if (mobileSearchBar.classList.contains("active")) {
            mobileSearchInput.focus();
        }
    });

    document.addEventListener("click", function (e) {
        if (!mobileSearchBar.contains(e.target)) {
            mobileSearchBar.classList.remove("active");
        }
    });
}