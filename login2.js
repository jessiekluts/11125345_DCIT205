function validateLogin() {
    var idNumber = document.getElementById('idNumber').value;
    var password = document.getElementById('password').value;

    if (idNumber !== '' && password !== '') {
        alert('Login successful!');
    } else {
        alert('Please enter both ID Number and Password.');
    }
}