const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signupBtn');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
const emailError = document.getElementById('emailError');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.includes('.com');
}

// Username validation (min 8 characters)
function validateUsername(username) {
    return username.length >= 8;
}

// Password validation
function validatePassword(password) {
    return password.length > 0;
}

// Check if form is valid
function checkFormValidity() {
    const isEmailValid = validateEmail(emailInput.value);
    const isUsernameValid = validateUsername(usernameInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);
    const isCategorySelected = document.getElementById('category').value !== '';

    signupBtn.disabled = !(isEmailValid && isUsernameValid && isPasswordValid && isCategorySelected);
}

// Email input validation
emailInput.addEventListener('input', function () {
    if (this.value) {
        if (!validateEmail(this.value)) {
            this.classList.add('error');
            emailError.classList.add('show');
        } else {
            this.classList.remove('error');
            emailError.classList.remove('show');
        }
    } else {
        this.classList.remove('error');
        emailError.classList.remove('show');
    }
    checkFormValidity();
});

// Username input validation
usernameInput.addEventListener('input', function () {
    if (this.value) {
        if (!validateUsername(this.value)) {
            this.classList.add('error');
            usernameError.classList.add('show');
        } else {
            this.classList.remove('error');
            usernameError.classList.remove('show');
        }
    } else {
        this.classList.remove('error');
        usernameError.classList.remove('show');
    }
    checkFormValidity();
});

// Password input validation
passwordInput.addEventListener('input', function () {
    if (this.value) {
        if (!validatePassword(this.value)) {
            this.classList.add('error');
            passwordError.classList.add('show');
        } else {
            this.classList.remove('error');
            passwordError.classList.remove('show');
        }
    } else {
        this.classList.remove('error');
        passwordError.classList.remove('show');
    }
    checkFormValidity();
});

// Category selection validation
document.getElementById('category').addEventListener('change', function () {
    checkFormValidity();
});

// Toggle password visibility
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change eye icon
    if (type === 'text') {
        eyeIcon.textContent = '👁️‍🗨️';
    } else {
        eyeIcon.textContent = '👁';
    }
});

// Form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!signupBtn.disabled) {
        // Get selected category
        const selectedCategory = document.getElementById('category').value;

        // Dashboard URLs - you can fill these in later
        const dashboardURLs = {
            'UMKM': '', // Fill in your UMKM dashboard URL here
            'Tenaga Kerja': '' // Fill in your Tenaga Kerja dashboard URL here
        };

        // Get the appropriate dashboard URL
        const redirectURL = dashboardURLs[selectedCategory];

        // Alert for demonstration
        alert(`Sign up successful as ${selectedCategory}! Redirecting to ${selectedCategory} Dashboard...`);

        // Redirect to the appropriate dashboard
        // Uncomment the line below and fill in the URLs above when ready
        // window.location.href = redirectURL;

        // For now, just show which dashboard would be selected
        console.log(`Would redirect to: ${selectedCategory} Dashboard`);
        console.log(`URL: ${redirectURL || 'URL not set yet'}`);
    }
});

// Initial form validity check
checkFormValidity();