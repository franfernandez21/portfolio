        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Funcionalidad del Menú Hamburguesa Móvil
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            // Alternar menú al hacer clic en el botón
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
            });

            // Cerrar menú al hacer clic en un enlace
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                });
            });

            // 2. Efecto de fondo en el Navbar al hacer scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-lg');
                } else {
                    navbar.classList.remove('shadow-lg');
                }
            });

            // 3. Animaciones de Fade-In al hacer scroll (Intersection Observer)
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Dejar de observar una vez que aparece
                    }
                });
            }, observerOptions);

            fadeElements.forEach(el => {
                observer.observe(el);
            });

            // 4. Manejo del Formulario de Contacto (Simulado)
            const contactForm = document.getElementById('contact-form');
            const formSuccess = document.getElementById('form-success');

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault(); // Evita que la página se recargue
                
                // Mostrar mensaje de éxito
                formSuccess.classList.remove('hidden');
                
                // Limpiar el formulario
                contactForm.reset();

                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            });
        });