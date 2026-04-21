document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        // Toggle del menú
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = mainNav.classList.toggle('active');
            // Cambiar icono: ☰ (abrir) / ✕ (cerrar)
            menuToggle.innerHTML = isActive ? '✕' : '☰';
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active')) {
                const isClickInside = mainNav.contains(e.target) || menuToggle.contains(e.target);
                
                if (!isClickInside) {
                    mainNav.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            }
        });
    }
});