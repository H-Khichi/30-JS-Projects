var nameErr = document.getElementById("name-error")
var phoneErr = document.getElementById("phone-error")
var emailErr = document.getElementById("email-error")
var msgErr = document.getElementById("message-error")
var submitErr = document.getElementById("submit-error")


function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameErr.innerHTML = "Name is required"
        nameErr.style.color = 'red'
        return false
    }
    
    else if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameErr.innerHTML = "Write Full Name"
        nameErr.style.color = 'red'
        return false
    }
    else {
        nameErr.innerHTML = "valid";
        nameErr.style.color = 'green'
        return true;
    }
}
function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneErr.innerHTML = "Phone no is required"
        phoneErr.style.color = 'red'
        return false
    }
    else if (phone.length !== 11) {
        phoneErr.innerHTML = "Phone number should be 11 digits"
        phoneErr.style.color = 'red'
        return false
    }
    else if (!phone.match(/^[0-9]{11}$/)) {
        phoneErr.innerHTML = "only digits"
        phoneErr.style.color = 'red'
        return false

    }else {
        phoneErr.innerHTML = "valid";
        phoneErr.style.color = 'green'
        return true;
    }
    
}
function validateEmail() {
    var email = document.getElementById("email-contact").value;
    if (email.length == 0) {
        emailErr.innerHTML = "email is required"
        emailErr.style.color = 'red'
        return false

    } 

    else if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailErr.innerHTML = "invalid email"
        emailErr.style.color = 'red'
        return false

    } else {
        emailErr.innerHTML = "valid";
        emailErr.style.color = 'green'
        return true;
    };
}
function validateMsg() {
    var msg = document.getElementById('contact-msg').value;
    var required=30;
    var left=required - msg.length;

    if(left>0){
        msgErr.innerHTML=left+'more characters required';
        msgErr.style.color = 'red'
        return false
    }
    else{
        msgErr.innerHTML="valid"
        msgErr.style.color="green"
        return true;
    }
}
function validateForm(){
    var isNameValid = validateName();
    var isPhoneValid = validatePhone();
    var isEmailValid = validateEmail();
    var isMsgValid = validateMsg();
 if (isNameValid && isPhoneValid && isEmailValid && isMsgValid) {
        submitErr.style.display = "none";  // No error if all are valid
        return true;  // Form is valid, allow submission
    } else {
        submitErr.style.display = "block";
        submitErr.innerHTML = "Please fix the errors above";
        setTimeout(() => {
            submitErr.style.display = 'none';
        }, 3000);
        return false;  // Prevent submission
    }
}