const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

// Show dropdown when typing
searchInput.addEventListener('input', function () {
  if (this.value.length > 0) {
    searchDropdown.classList.add('active');
  } else {
    searchDropdown.classList.remove('active');
  }
});

// Show dropdown on focus if there's text
searchInput.addEventListener('focus', function () {
  if (this.value.length > 0) {
    searchDropdown.classList.add('active');
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.search-wrapper')) {
    searchDropdown.classList.remove('active');
  }
});

// Select item from dropdown
function selectItem(itemName) {
  searchInput.value = itemName;
  searchDropdown.classList.remove('active');
  console.log('Selected:', itemName);
}

function toggleNav() {
  const sidenav = document.getElementById('sidenav');
  const overlay = document.getElementById('overlay');

  sidenav.classList.toggle('active');
  overlay.classList.toggle('active');
}

function closeNav() {
  const sidenav = document.getElementById('sidenav');
  const overlay = document.getElementById('overlay');

  sidenav.classList.remove('active');
  overlay.classList.remove('active');
}

// Close nav when clicking on nav items on mobile
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      closeNav();
    }
  });
});