const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

function validatePasswordMatch() {
    if (confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match.');
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
}

passwordInput.addEventListener('input', validatePasswordMatch);
confirmPasswordInput.addEventListener('input', validatePasswordMatch);
