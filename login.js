let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];

function loginUser() {
    event.preventDefault();
    let flag = 0;
    let emailInput = document.getElementById('email').value;
    let passInput = document.getElementById('password').value;
    for (let i = 0; i < userDatabase.length; i++) {
        if (emailInput == userDatabase[i]['email'] && passInput == userDatabase[i]['password']) {
            flag = 1;
            window.location.href = 'index.html';
        }
    }

    if (flag === 0) {
        alert('invalid Credentials')
    }
}

function goToHome() {
    window.location.href = 'index.html';
}
function goToLogin() {
    window.location.href = 'login.html';
}
function goToSignup() {
    window.location.href = 'signup.html';
}