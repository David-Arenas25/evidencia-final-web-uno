const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const contrasenaRegex = /^[a-zA-Z\s]{1,50}$/
const nombreRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const valorCorreoInput = document.querySelector("#email").value.trim()
const valorContrasenaInput = document.querySelector("#password").value.trim()
const valorNombreInput = document.querySelector("#name").value.trim()
const enviarFormulario = document.querySelectorAll("#mi-boton")

const correoUsuario = document.getElementById('login-email').value.trim()
const contraseniaUsuario = document.getElementById('login-password').value.trim()





