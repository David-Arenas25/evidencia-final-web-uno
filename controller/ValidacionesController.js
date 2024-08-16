import { 
    correoRegex, contrasenaRegex, nombreRegex, 
    valorCorreoInput, valorContrasenaInput, valorNombreInput, 
    correoUsuario, contraseniaUsuario, loginForm, registerForm, 
    toLoginLink, toRegisterLink ,spinner
} from '../model/Validaciones.js';
import { filtrarProyectos } from './ProyectoController.js';

export let usuarios = [];
export let inicioSesion = false;

// Función para registrarse
function registrarse() {
    let esValido = true;
    if (!correoRegex.test(valorCorreoInput.value)) {
        esValido = false;
        valorCorreoInput.classList.remove('input-success');
        valorCorreoInput.classList.add('input-error');
    } else {
        valorCorreoInput.classList.remove('input-error');
        valorCorreoInput.classList.add('input-success');
    }

    // Validación de la contraseña
    if (!contrasenaRegex.test(valorContrasenaInput.value)) {
        esValido = false;
        valorContrasenaInput.classList.remove('input-success');
        valorContrasenaInput.classList.add('input-error');
        alert("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra y un número.");
    } else {
        valorContrasenaInput.classList.remove('input-error');
        valorContrasenaInput.classList.add('input-success');
    }

    // Validación del nombre
    if (!nombreRegex.test(valorNombreInput.value)) {
        esValido = false;
        valorNombreInput.classList.remove('input-success');
        valorNombreInput.classList.add('input-error');
        alert("El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.");
    } else {
        valorNombreInput.classList.remove('input-error');
        valorNombreInput.classList.add('input-success');
    }

    // Validación del correo en el almacenamiento local
    let usuariosString = localStorage.getItem('usuarios');
    let usuariosStorage = JSON.parse(usuariosString) || [];
    let correoEncontrado = usuariosStorage.find(usuario => usuario.correo === valorCorreoInput.value);

    if (correoEncontrado) {
        esValido = false;
        alert('El correo ingresado ya se encuentra registrado');
    }

    // Si todas las validaciones son correctas
    if (esValido) {
        // Crear un nuevo usuario
        let usuario = {
            nombre: valorNombreInput.value,
            correo: valorCorreoInput.value,
            contrasenia: valorContrasenaInput.value
        };

        // Asegúrate de que 'usuarios' esté definido en algún lugar
        usuariosStorage.push(usuario);
        alert('Bienvenido ' + usuario.nombre + '. Por favor, inicie sesión.');

        // Guardar en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosStorage));

        // Limpiar los campos de entrada después del registro (opcional)
        valorNombreInput.value = '';
        valorCorreoInput.value = '';
        valorContrasenaInput.value = '';

        // Llamada a toggleForms() si es necesario
        toggleForms();
    }
}


// Función para iniciar sesión


// Función para cerrar sesión
// Función para cerrar sesión
export function cerrarSesion() {
    let base = "/evidencia-final-web-uno/">

    // Eliminar el estado de inicio de sesión en sessionStorage
    sessionStorage.removeItem('inicioSesion');
    
    // Actualizar el estado global de inicio de sesión
    inicioSesion = false;
    
    // Redirigir al usuario a la página de inicio
    window.location.href = `${base}/index.html`
}


// Función para mostrar alerta
export function showAlert(message) {
    var alertBox = document.getElementById('alertBox');
    var alertMessage = document.getElementById('alertMessage');
    if (alertMessage) {
        alertMessage.textContent = message;
        alertBox.classList.add('show');
    }
}

// Función para cerrar alerta
export function closeAlert() {
    var alertBox = document.getElementById('alertBox');
    if (alertBox) {
        alertBox.classList.remove('show');
    } else {
        console.warn('No se encontró el elemento con id "alertBox".');
    }
}

// Función para validar el registro y redireccionar
// Función para iniciar sesión
export function iniciarSesion() {
    let esValido = true;

    // Validación del correo
    if (!correoRegex.test(correoUsuario.value)) {
        esValido = false;
        correoUsuario.classList.remove('input-success');
        correoUsuario.classList.add('input-error');
        alert("Por favor, ingresa un correo electrónico válido. Ejemplo: usuario@dominio.com");
    } else {
        correoUsuario.classList.remove('input-error');
        correoUsuario.classList.add('input-success');
    }

    // Validación de la contraseña
    if (!contrasenaRegex.test(contraseniaUsuario.value)) {
        esValido = false;
        contraseniaUsuario.classList.remove('input-success');
        contraseniaUsuario.classList.add('input-error');
        alert("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra y un número.");
    } else {
        contraseniaUsuario.classList.remove('input-error');
        contraseniaUsuario.classList.add('input-success');
    }

    if (esValido) {
        // Obtener usuarios del localStorage
        let usuariosString = localStorage.getItem('usuarios');
        let usuariosStorage = JSON.parse(usuariosString) || [];
        
        // Buscar el usuario con las credenciales proporcionadas
        let usuarioEncontrado = usuariosStorage.find(usuario => 
            usuario.correo === correoUsuario.value && usuario.contrasenia === contraseniaUsuario.value
        );



        if (usuarioEncontrado) {
            // Iniciar sesión y guardar estado en sessionStorage
            sessionStorage.setItem('inicioSesion', 'true');
            alert('Inicio de sesión exitoso');
            validarRegistro(true);
        } else {
            alert('Valide sus credenciales')
            localStorage.setItem('inicioSesion', 'false');
        }
}
}
// Función para validar el registro y redireccionar
export function validarRegistro(inicio) {
    const rutaActual = window.location.pathname;
    const base = "/evidencia-final-web-uno/"


    // Si el usuario ha iniciado sesión
    if (inicio) {
        // Redirigir a la página 'proyecto.html' si están en 'index.html'
        if (rutaActual === `${base}/index.html`) {
            window.location.href = '/view/proyecto.html';
        
        }

        // (Opcional) Manejo de redirección si ya está en 'proyecto.html'
        // Si estás en 'proyecto.html' y ya has iniciado sesión, no necesitas redirigir
        // Puedes hacer alguna otra lógica si es necesario
        if (rutaActual === `${base}/view/proyecto.html`) {
            console.log('Usuario ya está en la página de proyecto.');
        }
    } else {
        // Si el usuario no ha iniciado sesión
        // Redirigir a 'index.html' si están en 'proyecto.html'
        if (rutaActual === `${base}/view/proyecto.html`) {
            window.location.href =  `${base}/index.html`;
         
        }

        // (Opcional) Manejo de redirección si ya está en 'index.html'
        // Si estás en 'index.html' y no has iniciado sesión, no necesitas redirigir
        // Puedes hacer alguna otra lógica si es necesario
        if (rutaActual === `${base}/index.html`) {
            console.log('Usuario en la página de inicio.');
          
        }
    }
}



// Función para alternar formularios
export function toggleForms() {
    spinner.style.display = 'block';
    if(registerForm || loginForm){
    if (registerForm.classList.contains('hidden')) {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 1000);
}

// Eventos para alternar formularios
if (toLoginLink) toLoginLink.addEventListener('click', toggleForms);
if (toRegisterLink) toRegisterLink.addEventListener('click', toggleForms);

export default registrarse;
