import { iniciarSesion} from "./ValidacionesController.js";
import registrase from "./ValidacionesController.js";
import { registroUsuario,inicioSesionUsuario, cambiarForm } from "../model/Validaciones.js";
import { toggleForms } from "./ValidacionesController.js";
import {  inputNombreProyecto, inputEstadoProyecto,inputFechaProyecto } from "../model/Proyectos.js";
import { filtrarProyectos } from "./ProyectoController.js";





// Escucha el evento 'keyup' en el campo de entrada
let debounceTimer;

inputNombreProyecto.addEventListener('keydown', () => {
    // Limpiar el temporizador anterior si existe
    clearTimeout(debounceTimer);

    // Usa setTimeout para retrasar la ejecución de la función de filtrado
    debounceTimer = setTimeout(() => {
        // Llama a la función filtrarProyectos con el valor del campo de entrada
        filtrarProyectos('nombre');
    }, 1000); // Ajusta el tiempo de retardo (en milisegundos) según lo necesites
});


inputFechaProyecto.addEventListener('input', ()=>{ 

    filtrarProyectos('fecha')
})
inputEstadoProyecto.addEventListener('click', ()=>{

    filtrarProyectos('estado')
})




if(cambiarForm){
cambiarForm.addEventListener('changes',toggleForms)
}
// if (inputEstadoProyecto && inputNombreProyecto && inputFechaProyecto) {
//     inputNombreProyecto.addEventListener('input', () => actualizarFiltro('nombre'));
//     inputEstadoProyecto.addEventListener('input', () => actualizarFiltro('estado'));
//     inputFechaProyecto.addEventListener('input', () => actualizarFiltro('fecha'));
//     if(inicioSesion) {
//     alert('debe inciar sesion para continuar')
//     window.location.href = ('../index.html')//usar confirnm...
    
// }


if (registroUsuario) {
    registroUsuario.addEventListener('click',registrase)
}
if (inicioSesionUsuario) {
    inicioSesionUsuario.addEventListener('click', iniciarSesion)
}


