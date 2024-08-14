import { iniciarSesion} from "./ValidacionesController.js";
import { cerrarSesionBtn } from "../model/Proyectos.js";
import registrase from "./ValidacionesController.js";
import { registroUsuario, inicioSesionUsuario } from "../model/Validaciones.js";
import { inputNombreProyecto, inputEstadoProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { filtrarProyectos } from "./ProyectoController.js";
import { cerrarSesion } from "./ValidacionesController.js";


filtrarProyectos('')

if (registroUsuario && inicioSesionUsuario ) {
    registroUsuario.addEventListener('click', registrase)
    inicioSesionUsuario.addEventListener('click', iniciarSesion)  
}
if(cerrarSesionBtn)cerrarSesionBtn.addEventListener('click',cerrarSesion)


if (inputNombreProyecto) {
    let debounceTimer;
    inputNombreProyecto.addEventListener('keydown', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            filtrarProyectos('nombre');;
        }, 1000);
    });

    inputFechaProyecto.addEventListener('input', () => {
        filtrarProyectos('fecha');
    });

    inputEstadoProyecto.addEventListener('input', () => {
        filtrarProyectos('estado')

    })      

}


// Obtener referencias a los elementos del DOM
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const toLoginLink = document.getElementById('toLogin');
const toRegisterLink = document.getElementById('toRegister');
const spinner = document.getElementById('spinner');


function toggleForms(event) { 
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
if(toLoginLink)
toLoginLink.addEventListener('click', toggleForms);
if(toRegisterLink)
toRegisterLink.addEventListener('click', toggleForms);




