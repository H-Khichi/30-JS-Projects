let eyeIcon = document.getElementById("eye-icon")
let password = document.getElementById("password")
// function showPassword(){


eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "/password/images/eye-open.png"
    }
    else {
        password.type = "password";
        eyeIcon.src = "/password/images/eye-close.png"

    }
}