document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerText = "Nenache nee Yes solluva nu, apdi vaa valiku !";
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

});

// Login Page Logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'reshmi' && password === 'reshmi') {
        window.location.href = 'index.html'; // Redirect to Valentine's Day page
    } else {
        document.getElementById('errorMessage').style.display = 'block'; // Show error message
    }
});

