import { correoRegex, contrasenaRegex, nombreRegex, valorCorreoInput, valorContrasenaInput, valorNombreInput, enviarFormulario, correoUsuario, contraseniaUsuario, validacionFormulario } from '../model/Validaciones.js'
export let usuarios = []
function registrase() {
    let esValido = true
    if (!correoRegex.test(valorCorreoInput)) {
        esValido = false
        console.log("Por favor, ingrese un correo válido.")
    } else {
        usuarios.forEach(element => {
            if (element.correo === valorCorreoInput) {
                console.log("Ya existe un usuario con ese correo electrónico registrado")
                esValido = false
            }
        });
    }
    if (!contrasenaRegex.test(valorContrasenaInput)) {
        esValido = false
        console.log("La contraseña debe tener solo letras y espacios, y tener entre 1 y 50 caracteres.")
    }
    if (!nombreRegex.test(valorNombreInput)) {
        esValido = false
        console.log("El nombre debe contener al menos una letra, al menos un número, y tener una longitud mínima de 8 caracteres.")
    }
    if (esValido) {
        let usuario ={
        nombre : valorNombreInput.value,
        correo : valorCorreoInput.value,
        contrasenia : valorContrasenaInput.value
        }
        usuarios.push(usuario)
        console.log("ya pusheo"+ usuario.nombre + usuario.correo + usuario.contrasenia)    
        
        let usuariosString = localStorage.setItem('usuarios',JSON.stringify(usuarios))


    }

    return []


}

export function iniciarSesion() {
    let usuariosString = localStorage.getItem('usuarios')
    let usuariosStorage = JSON.parse(usuariosString)
    usuariosStorage.forEach(usuario => {
        if (usuario.correo === correoUsuario.value && usuario.contrasenia === contraseniaUsuario.value) {
            console.log("ganó")
            console.log(true)
            window.location.href=('/view/proyecto.html')
        } else {
            console.log(false)
        }

    })
}

export default registrase