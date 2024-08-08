const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;


const valorCorreoInput = document.querySelector("#email")
const valorContrasenaInput = document.querySelector("#password")
const valorNombreInput = document.querySelector("#name")
const enviarFormulario = document.querySelectorAll("#mi-boton")

const correoUsuario = document.getElementById('login-email')
const contraseniaUsuario = document.getElementById('login-password')

const validacionFormulario = document.getElementById("register-button")
const validacionInicioSesionFormulario = document.getElementById("login-button")



export{
    correoRegex,contrasenaRegex,nombreRegex,valorCorreoInput,valorContrasenaInput,valorNombreInput,enviarFormulario,correoUsuario,contraseniaUsuario,validacionFormulario,validacionInicioSesionFormulario
}





