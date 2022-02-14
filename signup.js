let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];

function addUser() {
    event.preventDefault();
    let n = document.getElementById('name').value;
    let mobile = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (n != "" && mobile != "" && email != "" && pass != "") {
        let user = {
            name: n,
            contact: mobile,
            email: email,
            password: pass
        }
        userDatabase.push(user);

        localStorage.setItem('userDatabase',JSON.stringify(userDatabase));

        window.location.href = 'login.html';
    }

    if (n == "") {
        let text = document.getElementById('1');
        text.style.color = 'red';
    } else {
        let text = document.getElementById('1');
        text.style.color = 'transparent';
    }

    if (mobile == "") {
        let text = document.getElementById('2');
        text.style.color = 'red';
    } else {
        let text = document.getElementById('2');
        text.style.color = 'transparent';
    }

    if (email == "") {
        let text = document.getElementById('3');
        text.style.color = 'red';
    } else {
        let text = document.getElementById('3');
        text.style.color = 'transparent';
    }

    if (pass == "") {
        let text = document.getElementById('4');
        text.style.color = 'red';
    } else {
        let text = document.getElementById('4');
        text.style.color = 'transparent';
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