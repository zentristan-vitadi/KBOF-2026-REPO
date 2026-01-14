const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");

// Show dropdown when clicking on search input (like YouTube)
searchInput.addEventListener("click", function () {
  searchDropdown.classList.add("active");
});

// Show dropdown when typing
searchInput.addEventListener("input", function () {
  searchDropdown.classList.add("active");
});

// Show dropdown on focus (when user tabs to it or clicks)
searchInput.addEventListener("focus", function () {
  searchDropdown.classList.add("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".search-wrapper")) {
    searchDropdown.classList.remove("active");
  }
});

// Prevent dropdown from closing when clicking inside it
searchDropdown.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Select item from dropdown
function selectItem(itemName) {
  searchInput.value = itemName;
  searchDropdown.classList.remove("active");
  console.log("Selected:", itemName);
  // You can add navigation logic here
}
/* ========== END SEARCH DROPDOWN LOGIC ========== */

function toggleNav() {
  const sidenav = document.getElementById("sidenav");
  const overlay = document.getElementById("overlay");

  sidenav.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeNav() {
  const sidenav = document.getElementById("sidenav");
  const overlay = document.getElementById("overlay");

  sidenav.classList.remove("active");
  overlay.classList.remove("active");
}

// Close nav when clicking on nav items on mobile
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closeNav();
    }
  });
});
