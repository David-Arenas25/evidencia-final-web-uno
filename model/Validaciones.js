const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;


const valorCorreoInput = document.querySelector("#email")
const valorContrasenaInput = document.querySelector("#password")
const valorNombreInput = document.querySelector("#name")
const valorRolInput = document.querySelector("#role")
const registroUsuario = document.querySelector("#registerButton")
const correoUsuario = document.querySelector('#loginEmail')
const contraseniaUsuario = document.querySelector('#loginPassword')
const inicioSesionUsuario = document.querySelector("#loginButton")
const cambiarForm = document.querySelector(".toggle-link")



export{
    valorRolInput,correoRegex,contrasenaRegex,nombreRegex,valorCorreoInput,valorContrasenaInput,valorNombreInput,inicioSesionUsuario,correoUsuario,contraseniaUsuario,registroUsuario,cambiarForm
}





