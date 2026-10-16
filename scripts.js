// 1. Funcionalidad del Menú Móvil
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Cerrar menú al hacer clic en un enlace (móviles)
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}

// 2. Animaciones de aparición al hacer scroll (Fade-in)
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// 3. Lógica del Carrusel de Proyectos
const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicators = document.querySelectorAll('#carousel-indicators button');

if (track && prevBtn && nextBtn) {
    let currentIndex = 0;
    const slides = track.children;
    const totalSlides = slides.length;

    // Función para mover el carrusel
    function updateCarousel(index) {
        // Mueve el contenedor en el eje X
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Actualiza los colores de los puntos
        indicators.forEach((ind, i) => {
            if (i === index) {
                ind.style.backgroundColor = '#3b82f6'; // Azul exacto
                ind.style.transform = 'scale(1.3)';    // Lo agranda un poquito
            } else {
                ind.style.backgroundColor = '#4b5563'; // Gris exacto
                ind.style.transform = 'scale(1)';      // Tamaño normal
            }
        });
    }

    // Botón Siguiente
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
    });

    // Botón Anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(currentIndex);
    });

    // Clic en los puntos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });
}