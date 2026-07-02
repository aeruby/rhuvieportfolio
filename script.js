document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownLinks = dropdownMenu.querySelectorAll('a');

    // Toggle dropdown open and closed
    menuBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Close menu when clicking on any navigational link inside dropdown
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    });

    // Close menu if user clicks anywhere outside of the nav bar
    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});