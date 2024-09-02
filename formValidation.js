document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

   
    let valid = true;

    if (name.trim() === '') {
        showError('nameError', 'Name is required');
        valid = false;
    }

    if (email.trim() === '') {
        showError('emailError', 'Email is required');
        valid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Invalid email format');
        valid = false;
    }

    if (password.trim() === '') {
        showError('passwordError', 'Password is required');
        valid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
    document.getElementById(elementId).style.color = 'red';
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
