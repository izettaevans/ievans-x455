// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdown-button');

// Add click event listener to each button
dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the visibility of the corresponding content
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        
        // Toggle arrow direction
        button.classList.toggle('active');
    });
});
