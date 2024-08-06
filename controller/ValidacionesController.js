import { usuarios } from "../model/usuario";

function registrase(usuario){
    let esValido = true
    if(!correoRegex.test(valorCorreoInput)){
        esValido = false
        console.log("Por favor, ingrese un correo válido.")
    }else{
        usuarios.forEach(element => {
            if(element.correo === valorCorreoInput){
                console.log("Ya existe un usuario con ese correo electrónico registrado")
                esValido = false
            }            
        });
    }
    if(!contrasenaRegex.test(valorContrasenaInput)){
        esValido = false
        console.log("La contraseña debe tener solo letras y espacios, y tener entre 1 y 50 caracteres.")
    }
    if(!nombreRegex.test(valorNombreInput)){
        esValido = false
        console.log("El nombre debe contener al menos una letra, al menos un número, y tener una longitud mínima de 8 caracteres.")
    }
    if(esValido) {
        usuario.nombre = valorNombreInput 
        usuario.correo = valorCorreoInput
        usuario.contrasenia = valorContrasenaInput
        return usuario
    }

    return []


}

function iniciarSesion(usuarios){

    let inicioSesion = false;

    usuarios.forEach(usuario => {
        
        if(usuario.correo === correoUsuario && usuario.contrasenia === contraseniaUsuario){

            inicioSesion = true
        }else{
            inicioSesion = false
        }
        
    });

    return inicioSesion

}