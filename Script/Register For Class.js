document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseName = document.getElementById('course').value;

    if (courseName === "Default") {
        alert("Please select a valid course.");
        return;
    }

    const registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];

    registeredClasses.push({ courseName });

    localStorage.setItem('registeredClasses', JSON.stringify(registeredClasses));

    alert(`You have successfully registered for ${courseName}!`);
    document.getElementById('registration-form').reset();
});

function viewSchedule() {
    window.location.href = "Schedule.html";
}