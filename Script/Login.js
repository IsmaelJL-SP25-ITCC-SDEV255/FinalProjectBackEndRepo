function redirectToRegister() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        window.location.href = 'Register For Class.html';
    } else {
        alert('Please enter both username and password.');
    }
}