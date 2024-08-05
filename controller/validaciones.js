const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const passwordRegex = /^[a-zA-Z\s]{1,50}$/
const nameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const emailInputValue = document.querySelector("#name").value.trim()
const passwordInputValue = document.querySelector("#password").value.trim()
const nameInputValue = document.querySelector("#email").value.trim()
const enviarFormulario = document.querySelectorAll("#mi-boton")




function formValidation(){

    let validador = true

    if(!emailRegex.test(emailInputValue)){
        validador = false
        console.log("Por favor ingrese un email valido")
    }
    if(!passwordRegex.test(passwordInputValue))
        validador = false
        console.log("La contraseña debe tener solo letras y espacios, y tener entre 1 y 50 caracteres.");

    if(!nameRegex.test(nameInputValue)){
        validador = false
        console.log("El nombre debe contener al menos una letra, al menos un número, y tener una longitud mínima de 8 caracteres.");
    }

    if(validador) alert("Formulario exitoso")
    
}


