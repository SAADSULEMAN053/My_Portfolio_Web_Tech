document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenuButton = document.getElementById('closeMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinks = document.querySelectorAll('.nav-links a');

    function openMenu() {
        menuOverlay.style.display = 'flex';
        setTimeout(() => {
            menuOverlay.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    menuToggle.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
