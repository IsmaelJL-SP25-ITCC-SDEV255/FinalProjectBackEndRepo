function loadSchedule() {
    const registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];
    const scheduleTable = document.getElementById('schedule-table').getElementsByTagName('tbody')[0];
    
    registeredClasses.forEach((entry, index) => {
        const newRow = scheduleTable.insertRow();
        const courseCell = newRow.insertCell(0);
        const actionCell = newRow.insertCell(1);

        courseCell.textContent = entry.courseName;

        const dropButton = document.createElement('button');
        dropButton.textContent = 'Drop';
        dropButton.onclick = () => dropClass(index);
        actionCell.appendChild(dropButton);
    });
}

function dropClass(index) {
    let registeredClasses = JSON.parse(localStorage.getItem('registeredClasses')) || [];
    registeredClasses.splice(index, 1); 
    localStorage.setItem('registeredClasses', JSON.stringify(registeredClasses)); 
    location.reload(); 
}

window.onload = loadSchedule;