let username;
let password;
let email;
let accountnum = -1;


document.getElementById("login_button")?.addEventListener("click", function() {
    if (username === undefined || password === undefined) {
        //show theres no account registered
        alert("No account registered. Please register first.");
        return;
    }

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    
});


// For storage of the data we make new items by doing a localStorage.setItem(name, value)
// then to retrieve it we use getItem(name)



document.getElementById("register_button").addEventListener("click", function(){
    
    let checkpass1, checkpass2;

    checkpass1 = document.getElementById("new_password").value;
    checkpass2 = document.getElementById("confirm_new_password").value;

    if (checkpass1 === checkpass2){
        alert("Your account is registered")
            accountnum += 1;
            let key = "accountname" + accountnum;
            localStorage.setItem(key, )
            username = document.getElementById("new_username").value;
            password = document.getElementById("new_password").value;
            email = document.getElementById("new_email").value;
            localStorage
    }else{
        alert("passwords dont match")
    }

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

