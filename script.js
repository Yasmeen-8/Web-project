let loginForm = document.querySelector('form');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = usernameInput.value;
    let password = passwordInput.value;

    // Perform login logic here
    console.log('Logging in with:', username, password);
});

