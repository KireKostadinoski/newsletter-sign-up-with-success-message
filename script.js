const signUp = document.getElementById('sign-up');
const success = document.getElementById('success');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitBtn');
const dismissButton = document.getElementById('dismissBtn');
const error = document.getElementById('error');
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function submit() {
    if (emailInput.value.length === 0) {
        return error.innerHTML = "Email address required",
        emailInput.style.backgroundColor = 'rgba(240, 18, 66, 0.232)';

    } else if (emailRegEx.test(emailInput.value)) {
        signUp.style.display = "none";
        success.style.display = "flex";
    } else {
        return error.innerHTML = "Invalid email address",
         emailInput.style.backgroundColor = 'rgba(240, 18, 66, 0.232)';
    }

    return error.innerHTML = '';
}



dismissButton.addEventListener('click', function() {
    signUp.style.display = "flex";
    success.style.display = "none";
});



