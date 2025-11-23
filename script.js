let username;
let password;
let email;

document.getElementById("login_button")?.addEventListener("click", function() {
    if (username === undefined || password === undefined) {
        //show theres no account registered
        alert("No account registered. Please register first.");
        return;
    }

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    
});

document.addEventListener('DOMContentLoaded', () => {
const signupshow = document.getElementById('signup_show');
const loginshow = document.getElementById('login_show');
const loginDiv = document.getElementById('login_div');
const signupDiv = document.getElementById('signup_div');

if (signupshow && loginshow && loginDiv && signupDiv) {
    signupshow.addEventListener('click', () => {
        signupDiv.style.display = 'block';
        loginDiv.style.display = 'none';
    });

    loginshow.addEventListener('click', () => {
        loginDiv.style.display = 'block';
        signupDiv.style.display = 'none';
    });
} else {
    console.warn('script.js: one or more expected DOM elements are missing', {
        signup_show: !!signupshow,
        login_show: !!loginshow,
        login_div: !!loginDiv,
        signup_div: !!signupDiv
    });
}

});

