let username;
let password;
let email;


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
    }else{
        document.getElementById("login_error").style.display = "block";
        document.getElementById("login_success").style.display = 'none';
        let myVariable = "Incorrect username or password";
        document.getElementById("login_error").innerHTML = myVariable;
    }

    
});


// For storage of the data we make new items by doing a localStorage.setItem(name, value)
// then to retrieve it we use getItem(name)



document.getElementById("register_button").addEventListener("click", function(){
    
    let checkpass1, checkpass2;

    checkpass1 = document.getElementById("new_password").value;
    checkpass2 = document.getElementById("confirm_new_password").value;

    if (checkpass1 === checkpass2){
            document.getElementById("signup_error").style.display = "none";
            document.getElementById("signup_success").style.display = "block";
            localStorage.setItem("accountname", document.getElementById("new_username").value);
            localStorage.setItem("accountpassword", document.getElementById("new_password").value);
            localStorage.setItem("accountemail", document.getElementById("new_email").value);
            username = document.getElementById("new_username").value;
            password = document.getElementById("new_password").value;
    }
       else{
        document.getElementById("signup_error").style.display = "block";
        document.getElementById("signup_success").style.display = 'none';
        let myVariable = "Passwords don't match";
        document.getElementById("signup_error").innerHTML = myVariable;
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
}

