const coverBox = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotPasswordLink = document.querySelector('.forgot-password-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

// Toggle Forgot Password Form
function activateForgotPassword() {
    coverBox.classList.add('active-forgot');
}

function deactivateForgotPassword() {
    coverBox.classList.remove('active-forgot');
}

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    activateForgotPassword();
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    deactivateForgotPassword();
});

// Handle Forgot Password Form Submission
forgotPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('forgotPasswordEmail').value;

    try {
        const response = await fetch('/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Password reset link sent to your email.');
            deactivateForgotPassword(); // Close the form after successful submission
        } else {
            alert(data.message || 'Failed to send reset link. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
