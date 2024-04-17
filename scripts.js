
// Variables para elementos del menú y botones de alternancia
let menu = document.getElementById('menu')
let toggle_open = document.getElementById('toggle_open')
let toggle_close = document.getElementById('toggle_close')

// Event listeners para botones de alternancia
toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

// Función para alternar la visibilidad del menú
function toggleMenu() {
    menu.classList.toggle('show_menu');

    if(menu.classList.contains('show_menu')){
        toggle_open.style.display = "none";
        toggle_close.style.display = "block";
    }
    else{
        toggle_open.style.display = "block";
        toggle_close.style.display = "none";
    }
}

function copiarUrl(){
    let url=document.getElementById('url');
    let a=document.getElementById('botonCopiar');

    navigator.clipboard.writeText(url.textContent);
    alert ("email copiado")
}

function enviarFormulario(event) {
    // Detener el envío del formulario predeterminado
    event.preventDefault();

    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var coments = document.getElementById('coments').value;

    // Realizar la validación
    if (name.trim() === '' || email.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (subject.trim() === '' || coments.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Enviar el formulario si la validación tiene éxito
    document.getElementById('miFormulario').submit();

    // Redirigir después del envío del formulario
    window.location.href = 'http://127.0.0.1:5500/indexx.html';
}
