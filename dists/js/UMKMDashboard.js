/* ========== NAVIGATION FUNCTIONS - NEW ========== */
      // Show Dashboard (Home button)
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