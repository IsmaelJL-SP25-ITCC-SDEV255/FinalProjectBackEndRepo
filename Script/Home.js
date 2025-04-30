document.addEventListener('DOMContentLoaded', () => {
    const userRole = localStorage.getItem('userRole'); 
    const welcomeMessage = document.getElementById('welcomeMessage');
    const teacherActions = document.getElementById('teacherActions');
    const studentActions = document.getElementById('studentActions');

    if (userRole === 'teacher') {
        welcomeMessage.textContent = "Welcome, Teacher!";
        teacherActions.classList.remove('hidden');
    } else if (userRole === 'student') {
        welcomeMessage.textContent = "Welcome, Student!";
        studentActions.classList.remove('hidden');
    } else {
        welcomeMessage.textContent = "Please log in to access your actions.";
    }
});