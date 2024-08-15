
import { correoRegex, contrasenaRegex, nombreRegex, valorCorreoInput, valorContrasenaInput, valorNombreInput, correoUsuario, contraseniaUsuario } from '../model/Validaciones.js'
export let usuarios = []
export let inicioSesion = false
let esValido = true;




function registrarse() {
    esValido = true;

    // Validación del correo
    if (!correoRegex.test(valorCorreoInput.value)) {
        esValido = false;
        valorCorreoInput.classList.add('input-error'); // Debería ser valorCorreoInput
        console.log("Mensaje de error: Por favor, ingresa un correo electrónico válido. Ejemplo: usuario@dominio.com");
    } else {
        // Verificar si el correo ya está registrado
        usuarios.forEach(element => {
            if (element.correo === valorCorreoInput.value) {
                console.log("Ya existe un usuario con ese correo electrónico registrado");
                esValido = false;
                valorCorreoInput.classList.add('input-error');
            }
        });
    }

    // Validación de la contraseña
    if (!contrasenaRegex.test(valorContrasenaInput.value)) {
        esValido = false;
        valorContrasenaInput.classList.add('input-error'); // Debería ser valorContrasenaInput
        console.log("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra y un número.");
    }

    // Validación del nombre
    if (!nombreRegex.test(valorNombreInput.value)) {
        esValido = false;
        valorNombreInput.classList.add('input-error');
        console.log("El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.");
    }

    // Si todas las validaciones son correctas
    if (esValido) {
        // Crear un nuevo usuario
        let usuario = {
            nombre: valorNombreInput.value,
            correo: valorCorreoInput.value,
            contrasenia: valorContrasenaInput.value
        };
        
        // Agregar el usuario a la lista
        usuarios.push(usuario);
        console.log("Usuario registrado: " + usuario.nombre + ", " + usuario.correo + ", " + usuario.contrasenia);
        
        // Guardar en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        // Limpiar los campos de entrada después del registro (opcional)
        valorNombreInput.value = '';
        valorCorreoInput.value = '';
        valorContrasenaInput.value = '';
    }

    return esValido; // Devolver el resultado de la validación
}



export function iniciarSesion() {
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

    if(esValido){
    console.log('entro')
    let usuariosString = localStorage.getItem('usuarios')
    let usuariosStorage = JSON.parse(usuariosString)
    usuariosStorage.forEach(usuario => {
        if (usuario.correo === correoUsuario.value && usuario.contrasenia === contraseniaUsuario.value) {
            inicioSesion = true
            window.location.href = ('/view/proyecto.html')
            
        } else {
            console.log('no coincide')
            inicioSesion = false
        }

    })
}
}

export function cerrarSesion(){
    inicioSesion = false
    validarRegistro()
    
}

export function validarRegistro() {
    // Mostrar overlay con mensaje
    const overlay = document.getElementById('overlay');
    overlay.classList.add('show');

    // Aplicar el efecto de desvanecimiento
    document.body.classList.add('fade-out');

    setTimeout(() => {    
        if (inicioSesion === false) {
            window.location.href = '/index.html'; 
        }else{
            alert('Bienvenido')
        }
    }, 1000);
    console.log('Inicio de sesión: ' + inicioSesion);
}



export default registrarse

