import { cerrarSesionBtn } from '../model/Proyectos.js'
import { correoRegex, contrasenaRegex, nombreRegex, valorCorreoInput, valorContrasenaInput, valorNombreInput, correoUsuario, contraseniaUsuario } from '../model/Validaciones.js'
export let usuarios = []
export let inicioSesion = false




function registrase() {
    let esValido = true
    if (!correoRegex.test(valorCorreoInput.value)) {
        esValido = false
        console.log("Mensaje de error: Por favor, ingresa un correo electrónico válido. Ejemplo: usuario@dominio.com")
    } else {
        usuarios.forEach(element => {
            if (element.correo === valorCorreoInput.value) {
                console.log("Ya existe un usuario con ese correo electrónico registrado")
                esValido = false
            }
        });
    }
    if (!contrasenaRegex.test(valorContrasenaInput.value)) {
        esValido = false
        console.log("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra y un número.")
    }
    if (!nombreRegex.test(valorNombreInput.value)) {
        esValido = false
        console.log("El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.")
    }
    if (esValido) {
        let usuario = {
            nombre: valorNombreInput.value,
            correo: valorCorreoInput.value,
            contrasenia: valorContrasenaInput.value
        }
        usuarios.push(usuario)
        console.log("ya pusheo" + usuario.nombre + usuario.correo + usuario.contrasenia)
        let usuariosString = localStorage.setItem('usuarios', JSON.stringify(usuarios))


    }

    return []

}


export function iniciarSesion() {
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
        }
    }, 1000);
    console.log('Inicio de sesión: ' + inicioSesion);
}



export default registrase

