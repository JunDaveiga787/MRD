document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    if (!menuToggle || !mainNav) return;

    const isMobile = () => window.innerWidth <= 768;

    const toggleMenu = () => {
        if (isMobile()) {
            const isActive = mainNav.classList.toggle('active');
            menuToggle.innerHTML = isActive ? '✕' : '☰';
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
        }
    };

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isMobile()) {
            toggleMenu();
        }
    });

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            if (isMobile() && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuOverlay.classList.remove('active');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!isMobile()) return;
        if (mainNav.classList.contains('active')) {
            const isClickInsideMenu = mainNav.contains(e.target);
            const isClickOnToggle = menuToggle.contains(e.target);
            if (!isClickInsideMenu && !isClickOnToggle) {
                mainNav.classList.remove('active');
                menuToggle.innerHTML = '☰';
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
            }
        }
    });

    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile()) {
                mainNav.classList.remove('active');
                menuToggle.innerHTML = '☰';
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        if (!isMobile() && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = '☰';
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
            }
        }
    });
});