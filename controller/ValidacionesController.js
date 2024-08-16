
import { correoRegex, contrasenaRegex, nombreRegex, valorCorreoInput, valorContrasenaInput, valorNombreInput, correoUsuario, contraseniaUsuario, loginForm } from '../model/Validaciones.js'
export let usuarios = []
export let inicioSesion = false
let esValido = true;
import { toLoginLink, toRegisterLink } from '../model/Validaciones.js';
import { registerForm } from '../model/Validaciones.js';
import { filtrarProyectos } from './ProyectoController.js';


const urlActual = window.location.pathname;
if(urlActual === 'view/proyecto.html'){
    validarRegistro('',false)
}

function registrarse() {
    let esValido = true;

    // Validación del correo
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
        console.log("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra y un número.");
    } else {
        valorContrasenaInput.classList.remove('input-error');
        valorContrasenaInput.classList.add('input-success');
    }

    // Validación del nombre
    if (!nombreRegex.test(valorNombreInput.value)) {
        esValido = false;
        valorNombreInput.classList.remove('input-success');
        valorNombreInput.classList.add('input-error');
        console.log("El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.");
    } else {
        valorNombreInput.classList.remove('input-error');
        valorNombreInput.classList.add('input-success');
    }

    // Si todas las validaciones son correctas
    if (esValido) {
        // Crear un nuevo usuario
        let usuario = {
            nombre: valorNombreInput.value,
            correo: valorCorreoInput.value,
            contrasenia: valorContrasenaInput.value
        };

        // Asegúrate de que usuarios esté definido en algún lugar
        usuarios.push(usuario);
        console.log("Usuario registrado: " + usuario.nombre + ", " + usuario.correo + ", " + usuario.contrasenia);

        // Guardar en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Limpiar los campos de entrada después del registro (opcional)
        valorNombreInput.value = '';
        valorCorreoInput.value = '';
        valorContrasenaInput.value = '';

        // Llamada a toggleForms() si es necesario
        toggleForms();
    }
}


export function iniciarSesion() {
    let esValido = true
    if (!correoRegex.test(correoUsuario.value)) {
        esValido = false;
        correoUsuario.classList.add('input-error'); // Debería ser valorCorreoInput
        console.log("Mensaje de error: Por favor, ingresa un correo electrónico válido. Ejemplo: usuario@dominio.com");
    }

    // Validación de la contraseña
    if (!contrasenaRegex.test(contraseniaUsuario.value)) {
        esValido = false;
        contraseniaUsuario.classList.add('input-error'); // Debería ser valorContrasenaInput
        console.log("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra y un número.");
    }

    if (esValido) {
        let usuariosString = localStorage.getItem('usuarios')
        let usuariosStorage = JSON.parse(usuariosString)
        usuariosStorage.forEach(usuario => {
            if (usuario.correo === correoUsuario.value && usuario.contrasenia === contraseniaUsuario.value) {
                inicioSesion = true
               

            } else {
                console.log('no coincide')
                inicioSesion = false
            }

        })
    }
    validarRegistro(inicioSesion)


}

export function cerrarSesion() {
    validarRegistro(false)



}

export function showAlert(message) {
    var alertBox = document.getElementById('alertBox');
    var alertMessage = document.getElementById('alertMessage');
    if (alertMessage) {
        alertMessage.textContent = message;
        alertBox.classList.add('show');
    }
}

export function closeAlert() {
    var alertBox = document.getElementById('alertBox');
    alertBox.classList.remove('show');
}
export function validarRegistro(inicioSesion) {
    // Obtén la URL actual
    const urlActual = window.location.pathname;
    
    // Redirige según el estado de inicio de sesión
    if (inicioSesion) {
        // Si el usuario está autenticado, asegúrate de que está en la página correcta
        if (urlActual === "/index.html") {
            window.location.href = "/view/proyecto.html";
        }
    } else {
        // Si el usuario no está autenticado, redirígelo a la página de inicio si está en proyecto.html
        if (urlActual === "/view/proyecto.html") {
            window.location.href = "/index.html";
        }
    }
    filtrarProyectos('',inicioSesion)
}






export function toggleForms() {
    spinner.style.display = 'block';
    if (registerForm.classList.contains('hidden')) {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 300);
}
if (toLoginLink)
    toLoginLink.addEventListener('click', toggleForms);
if (toRegisterLink)
    toRegisterLink.addEventListener('click', toggleForms);


export default registrarse

