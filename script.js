document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            // Cambia el ícono para indicar que se puede cerrar
            menuToggle.innerHTML = mainNav.classList.contains('active') ? '✕' : '☰';
        });

        // Cerrar si hacen clic fuera del menú
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    }
});