let log = document.getElementById("login");
let reg = document.getElementById("register");
let button = document.getElementById("btn");

function register () {
    log.style.left = '-400px';
    reg.style.left = '50px';
    button.style.left = '110px';
}

function login () {
    log.style.left = '50px';
    reg.style.left = '450px';
    button.style.left = 0;
}

let mod = document.getElementById("login-form");
window.onclick = function(event) {
    if (event.target == mod) {
        mod.style.display = "none";
    }
}