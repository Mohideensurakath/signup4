
let loginForm = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log('Email:', email.value);
    console.log('Password:', password.value);
});

function onChange() {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity('');
        window.location.href = "home.html"; // Redirect to home.html
    } else {
        confirmPassword.setCustomValidity('Passwords do not match!');
        // Display an error message if login fails
        alert("Login failed. Please check your email and password.");
    }
}

password.addEventListener('change', onChange);
confirmPassword.addEventListener('change', onChange);






