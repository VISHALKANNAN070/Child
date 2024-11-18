// Get elements
const addStudentBtn = document.getElementById('add-student-btn');
const studentForm = document.getElementById('student-form');

// Initially hide the form
studentForm.style.display = 'none';

// Show form when 'Add Student' button is clicked
addStudentBtn.addEventListener('click', () => {
    // Toggle the visibility of the form
    if (studentForm.style.display === 'none' || studentForm.style.display === '') {
        studentForm.style.display = 'block'; // Show the form
        addStudentBtn.textContent = 'Cancel'; // Change button text to 'Cancel'
    } else {
        studentForm.style.display = 'none'; // Hide the form
        addStudentBtn.textContent = 'Add Student'; // Reset button text to 'Add Student'
    }
});
