/* ========== MATCH SYSTEM - NEW ========== */
// Sample data for UMKM (businesses)
const umkmData = [
  { name: "Warung Makan Barokah", type: "UMKM", category: "Restaurant", location: "Jakarta", rating: "4.8", desc: "Traditional Indonesian cuisine restaurant", skills: ["Cooking", "Service"] },
  { name: "Toko Kain Sejahtera", type: "UMKM", category: "Textile Shop", location: "Bandung", rating: "4.5", desc: "Quality fabric and traditional clothing", skills: ["Sewing", "Design"] },
  { name: "Bengkel Motor Jaya", type: "UMKM", category: "Workshop", location: "Surabaya", rating: "4.7", desc: "Professional motorcycle repair services", skills: ["Repair", "Maintenance"] },
  { name: "Toko Roti Manis", type: "UMKM", category: "Bakery", location: "Yogyakarta", rating: "4.9", desc: "Fresh bread and pastries daily", skills: ["Baking", "Pastry"] },
  { name: "Laundry Express 24", type: "UMKM", category: "Laundry", location: "Semarang", rating: "4.6", desc: "Fast and clean laundry service", skills: ["Cleaning", "Pressing"] },
  { name: "Salon Cantik Indah", type: "UMKM", category: "Salon", location: "Medan", rating: "4.8", desc: "Beauty and hair care services", skills: ["Hairstyle", "Makeup"] },
  { name: "Toko Elektronik Maju", type: "UMKM", category: "Electronics", location: "Makassar", rating: "4.4", desc: "Electronics and gadget store", skills: ["Sales", "Repair"] },
  { name: "Warung Kopi Nikmat", type: "UMKM", category: "Coffee Shop", location: "Bali", rating: "4.9", desc: "Artisan coffee and cozy ambiance", skills: ["Barista", "Service"] }
];

// Sample data for Tenaga Kerja (workers)
const tenagaKerjaData = [
  { name: "Ahmad Fauzi", type: "Tenaga Kerja", profession: "Web Developer", experience: "3 years", rating: "4.7", desc: "Full-stack developer specializing in modern web apps", skills: ["React", "Node.js", "MongoDB"] },
  { name: "Siti Nurhaliza", type: "Tenaga Kerja", profession: "Graphic Designer", experience: "5 years", rating: "4.9", desc: "Creative designer with branding expertise", skills: ["Photoshop", "Illustrator", "Figma"] },
  { name: "Budi Santoso", type: "Tenaga Kerja", profession: "Digital Marketer", experience: "4 years", rating: "4.6", desc: "SEO and social media marketing expert", skills: ["SEO", "Ads", "Content"] },
  { name: "Rina Wijaya", type: "Tenaga Kerja", profession: "Content Writer", experience: "2 years", rating: "4.8", desc: "Creative writer for blogs and articles", skills: ["Writing", "SEO", "Research"] },
  { name: "Andi Pratama", type: "Tenaga Kerja", profession: "Mobile Developer", experience: "4 years", rating: "4.7", desc: "iOS and Android app development", skills: ["Flutter", "Swift", "Kotlin"] },
  { name: "Dewi Lestari", type: "Tenaga Kerja", profession: "UI/UX Designer", experience: "3 years", rating: "4.9", desc: "User-centered design specialist", skills: ["Figma", "Sketch", "Prototyping"] },
  { name: "Rudi Hermawan", type: "Tenaga Kerja", profession: "Video Editor", experience: "3 years", rating: "4.5", desc: "Professional video editing and production", skills: ["Premiere", "After Effects"] },
  { name: "Lina Kartika", type: "Tenaga Kerja", profession: "Accountant", experience: "6 years", rating: "4.8", desc: "Financial planning and bookkeeping expert", skills: ["Excel", "QuickBooks", "Tax"] }
];

let currentMatches = { umkm: null, tenagaKerja: null };

// Open Match Popup
function openMatchPopup() {
  const overlay = document.getElementById('matchPopupOverlay');
  overlay.classList.add('active');
  startMatching();

  // Close mobile nav if open
  if (window.innerWidth <= 768) {
    closeNav();
  }
}

// Close Match Popup
function closeMatchPopup() {
  const overlay = document.getElementById('matchPopupOverlay');
  overlay.classList.remove('active');

  // Reset states
  document.getElementById('matchLoading').classList.remove('active');
  document.getElementById('matchResults').classList.remove('active');
}

// Start Matching Process
function startMatching() {
  const loading = document.getElementById('matchLoading');
  const results = document.getElementById('matchResults');

  // Show loading
  loading.classList.add('active');
  results.classList.remove('active');

  // Simulate matching process (3 seconds)
  setTimeout(() => {
    // Get random matches
    const umkm = umkmData[Math.floor(Math.random() * umkmData.length)];
    const tenagaKerja = tenagaKerjaData[Math.floor(Math.random() * tenagaKerjaData.length)];

    currentMatches = { umkm, tenagaKerja };

    // Display matches
    displayMatches(umkm, tenagaKerja);

    // Hide loading, show results
    loading.classList.remove('active');
    results.classList.add('active');
  }, 3000);
}

// Display Match Cards
function displayMatches(umkm, tenagaKerja) {
  const grid = document.getElementById('matchesGrid');

  // Get first letter for avatar
  const umkmInitial = umkm.name.charAt(0);
  const tkInitial = tenagaKerja.name.charAt(0);

  grid.innerHTML = `
                <div class="match-card">
                    <div class="match-card-type">${umkm.type}</div>
                    <div class="match-card-avatar">${umkmInitial}</div>
                    <h4>${umkm.name}</h4>
                    <div class="match-card-info">📍 ${umkm.location}</div>
                    <div class="match-card-info">⭐ ${umkm.rating} Rating</div>
                    <div class="match-card-info">🏪 ${umkm.category}</div>
                    <div class="match-card-desc">${umkm.desc}</div>
                    <div class="match-card-skills">
                        ${umkm.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                
                <div class="match-card">
                    <div class="match-card-type">${tenagaKerja.type}</div>
                    <div class="match-card-avatar">${tkInitial}</div>
                    <h4>${tenagaKerja.name}</h4>
                    <div class="match-card-info">💼 ${tenagaKerja.profession}</div>
                    <div class="match-card-info">⭐ ${tenagaKerja.rating} Rating</div>
                    <div class="match-card-info">📅 ${tenagaKerja.experience} experience</div>
                    <div class="match-card-desc">${tenagaKerja.desc}</div>
                    <div class="match-card-skills">
                        ${tenagaKerja.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `;
}

// Reroll Matches
function rerollMatches() {
  startMatching();
}

// Start Chat with Match
function startChatWithMatch() {
  closeMatchPopup();
  showChat();

  // You can customize this to show chat with the matched person
  alert(`Starting chat with ${currentMatches.umkm.name} and ${currentMatches.tenagaKerja.name}!`);
}
/* ========== END MATCH SYSTEM ========== */

/* Navigation Functions */
function showDashboard() {
  document.getElementById('dashboardContent').classList.remove('hidden');
  document.getElementById('chatSection').classList.remove('active');

  // Close mobile nav if open
  if (window.innerWidth <= 768) {
    closeNav();
  }
}

// Show Chat Section
function showChat() {
  document.getElementById('dashboardContent').classList.add('hidden');
  document.getElementById('chatSection').classList.add('active');

  // Scroll to bottom of chat
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Close mobile nav if open
  if (window.innerWidth <= 768) {
    closeNav();
  }
}

// Send Message Function
function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const messageText = chatInput.value.trim();

  if (messageText === '') return;

  const chatMessages = document.getElementById('chatMessages');
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  // Create new message element
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message sent';
  messageDiv.innerHTML = `
                <div class="message-avatar">B</div>
                <div class="message-content">
                    <div class="message-bubble">
                        <div class="message-text">${messageText}</div>
                    </div>
                    <div class="message-time">${currentTime}</div>
                </div>
            `;

  // Add message to chat
  chatMessages.appendChild(messageDiv);

  // Clear input
  chatInput.value = '';

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simulate typing indicator (optional)
  setTimeout(() => {
    showTypingIndicator();
  }, 1000);
}

// Handle Enter key press in chat
function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Show typing indicator (dummy response simulation)
function showTypingIndicator() {
  const chatMessages = document.getElementById('chatMessages');

  const typingDiv = document.createElement('div');
  typingDiv.className = 'message';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = `
                <div class="message-avatar">S</div>
                <div class="message-content">
                    <div class="message-bubble">
                        <div class="typing-indicator">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                </div>
            `;

  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Remove typing indicator after 2 seconds (optional)
  setTimeout(() => {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }
  }, 2000);
}
/* ========== END NAVIGATION FUNCTIONS ========== */

/* ========== SEARCH DROPDOWN LOGIC - MODIFIED ========== */
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

// Show dropdown when clicking on search input (like YouTube)
searchInput.addEventListener('click', function () {
  searchDropdown.classList.add('active');
});

// Show dropdown when typing
searchInput.addEventListener('input', function () {
  searchDropdown.classList.add('active');
});

// Show dropdown on focus (when user tabs to it or clicks)
searchInput.addEventListener('focus', function () {
  searchDropdown.classList.add('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.search-wrapper')) {
    searchDropdown.classList.remove('active');
  }
});

// Prevent dropdown from closing when clicking inside it
searchDropdown.addEventListener('click', function (event) {
  event.stopPropagation();
});

// Select item from dropdown
function selectItem(itemName) {
  searchInput.value = itemName;
  searchDropdown.classList.remove('active');
  console.log('Selected:', itemName);
  // You can add navigation logic here
}
/* ========== END SEARCH DROPDOWN LOGIC ========== */

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