import { iniciarSesion } from "./ValidacionesController.js";
import registrase from "./ValidacionesController.js";
import { registroUsuario, inicioSesionUsuario, cambiarForm } from "../model/Validaciones.js";
import { inputNombreProyecto, inputEstadoProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { filtrarProyectos } from "./ProyectoController.js";


function toggleForms() {
    document.getElementById('registerForm').classList.toggle('hidden');
    document.getElementById('registerForm').classList.toggle('visible');
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('loginForm').classList.toggle('visible');
}

function showLoader() {
    document.getElementById('loader').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        toggleForms();
    }, 2000); // Simula un tiempo de carga de 2 segundos
}

if(inputNombreProyecto){

let debounceTimer;

inputNombreProyecto.addEventListener('keydown', () => {

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {

        filtrarProyectos('nombre');
    }, 1000);
});
inputFechaProyecto.addEventListener('change', () => {
    filtrarProyectos('fecha');
});

inputEstadoProyecto.addEventListener('click', () => {
    filtrarProyectos('estado')
})

if (cambiarForm) {
    cambiarForm.addEventListener('click', toggleForms)
}
if (registroUsuario) {
    registroUsuario.addEventListener('click', registrase)
}
if (inicioSesionUsuario) {
    inicioSesionUsuario.addEventListener('click', () => {    
        showLoader()   
        iniciarSesion()
        

    })
}
}


