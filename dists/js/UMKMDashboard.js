// Elements
const mobileTrigger = document.getElementById('mobileSidebarTrigger');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const overlay = document.createElement('div');

// Create overlay
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

// Mobile trigger click
mobileTrigger.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Close sidebar
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close triggers
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Nav active state
document.querySelectorAll('.nav-link[data-page]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeSidebar(); // Close on mobile
    
    // Update active
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Demo page switch
    document.querySelector('.page-content').innerHTML = `
      <h1>${link.dataset.page.charAt(0).toUpperCase() + link.dataset.page.slice(1)} Page</h1>
      <p>Content for ${link.dataset.page} loaded!</p>
    `;
  });
});

// Detect device and show/hide trigger
function updateMobileTrigger() {
  if (window.innerWidth <= 1024) {
    mobileTrigger.style.display = 'flex';
  } else {
    mobileTrigger.style.display = 'none';
    closeSidebar(); // Close on desktop resize
  }
}

window.addEventListener('resize', updateMobileTrigger);
updateMobileTrigger(); // Initial check

// Same JS as previous version - fully compatible
const searchInput = document.getElementById('searchInput');
const searchWrapper = document.getElementById('searchWrapper');
const clearBtn = document.getElementById('clearBtn');
const searchDropdown = document.getElementById('searchDropdown');

searchInput.addEventListener('focus', () => {
  searchWrapper.classList.add('focused');
  searchDropdown.classList.add('active');
});

searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    searchWrapper.classList.remove('focused');
    searchDropdown.classList.remove('active');
  }, 200);
});

clearBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  searchInput.value = '';
  searchInput.focus();
});

document.querySelectorAll('.suggestion').forEach(suggestion => {
  suggestion.addEventListener('click', (e) => {
    const text = suggestion.querySelector('span:nth-child(2)').textContent;
    searchInput.value = text;
    console.log(`Searching for: ${text}`);
  });
});
