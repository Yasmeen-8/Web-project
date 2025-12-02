let username;
let password;
let email;
let signed_in = false;


document.getElementById("login_button")?.addEventListener("click", function() {
    let logusername = document.getElementById("username").value;
    let logpassword = document.getElementById("password").value;
    console.log("Attempting login with username:", logusername, "and password:", logpassword);
    console.log("Stored username:", username, "Stored password:", password);
    if (localStorage.getItem("accountname") === undefined || localStorage.getItem("accountpassword") === undefined) {
        //show theres no account registered
        alert("No account registered. Please register first.");
        return;
    }
    if (localStorage.getItem("accountname") === logusername && localStorage.getItem("accountpassword") === logpassword){
        document.getElementById("login_error").style.display = "none";
        document.getElementById("login_success").style.display = "block";
        document.getElementById("username").innerHTML = logusername;
        signed_in = true;
        console.log("Login successful for user:", logusername);
    }else{
        document.getElementById("login_error").style.display = "block";
        document.getElementById("login_success").style.display = 'none';
        let myVariable = "Incorrect username or password";
        document.getElementById("login_error").innerHTML = myVariable;
    }

    
});



document.getElementById("register_button").addEventListener("click", function(){

    let checkpass1, checkpass2;

    checkpass1 = document.getElementById("new_password").value;
    checkpass2 = document.getElementById("confirm_new_password").value;
    
    const emailInput = document.getElementById('new_email');
    const email = emailInput ? (emailInput.value || '').trim() : '';
    const username = document.getElementById("new_username").value;


    if (email && email.includes("@") && email.includes(".")){

        if (checkpass1 === checkpass2) { // check if Passwords match

        if ( checkpass1.length >= 6 && checkpass1.match(/[0-9]/) && checkpass1.match(/[a-z]/) && checkpass1.match(/[A-Z]/)) {
            if (username.length > 3){ // Username length check
            // Password is strong
            document.getElementById("signup_error").style.display = "none";
            document.getElementById("signup_success").style.display = "block";
            localStorage.setItem("accountname", document.getElementById("new_username").value);
            localStorage.setItem("accountpassword", document.getElementById("new_password").value);
            localStorage.setItem("accountemail", document.getElementById("new_email").value);
            username = document.getElementById("new_username").value;
            password = document.getElementById("new_password").value;
            signed_in = true;
        } else { // Username too short
                
                console.log("Username too short");
                document.getElementById("signup_error").style.display = "block";
                document.getElementById("signup_success").style.display = 'none';
                let myVariable = "Username must be longer than 3 characters.";
                document.getElementById("signup_error").innerHTML = myVariable;
            }

        } else { // Password is not strong enough
            console.log("Password is not strong enough");
            document.getElementById("signup_error").style.display = "block";
            document.getElementById("signup_success").style.display = 'none';
            let myVariable = "Passwords isnt strong enough.";
            document.getElementById("signup_error").innerHTML = myVariable;}

    }
       else{ //passwords dont match
        console.log("Passwords don't match");
        document.getElementById("signup_error").style.display = "block";
        document.getElementById("signup_success").style.display = 'none';
        let myVariable = "Passwords don't match";
        document.getElementById("signup_error").innerHTML = myVariable;
    }

    }else{  //email format invalid
        console.log("Invalid email format");
        document.getElementById("signup_error").style.display = "block";
        document.getElementById("signup_success").style.display = 'none';
        let myVariable = "Please enter a valid email address";
        document.getElementById("signup_error").innerHTML = myVariable;
        return;

    }

});

document.addEventListener('DOMContentLoaded', () => {
const signupshow = document.getElementById('signup_show');
const loginshow = document.getElementById('login_show');
const loginDiv = document.getElementById('login_div');
const signupDiv = document.getElementById('signup_div');

if (signupshow && loginshow && loginDiv && signupDiv) {
    document.getElementById("signup_success").style.display = 'none';
    document.getElementById("login_success").style.display = "none";
    signupshow.addEventListener('click', () => {
        signupDiv.style.display = 'block';
        loginDiv.style.display = 'none';
    });

    loginshow.addEventListener('click', () => {
        document.getElementById("login_success").style.display = "none";
        document.getElementById("signup_success").style.display = 'none';
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

function usernameDisplay() {
    document.getElementById("username").innerHTML = localStorage.getItem("accountname");
    console.log("Username displayed:", localStorage.getItem("accountname"));

    if(localStorage.getItem("accountname") !== null) {

        signed_in = true;
    } else {
        signed_in = false;
    }

    if (signed_in) {
        document.getElementById("text").innerHTML = "Sign Out";
    } else {
        document.getElementById("text").innerHTML = "Sign In";
    }

}
