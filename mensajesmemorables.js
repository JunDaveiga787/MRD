// Lazy loading optimizado para múltiples videos
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('.video-thumbnail iframe');
    
    if (iframes.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.dataset.src;
                    observer.unobserve(iframe);
                }
            });
        }, { rootMargin: '300px' });

        iframes.forEach(iframe => {
            const src = iframe.src;
            iframe.dataset.src = src;
            iframe.src = '';
            observer.observe(iframe);
        });
    }

    // Filtrado opcional por categoría (si agregas categorías en el futuro)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Lógica de filtrado aquí
        });
    });
});