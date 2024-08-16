import { iniciarSesion, inicioSesion, validarRegistro} from "./ValidacionesController.js";
import { cerrarSesionBtn } from "../model/Proyectos.js";
import registrase from "./ValidacionesController.js";
import { registroUsuario, inicioSesionUsuario, allInputs } from "../model/Validaciones.js";
import { inputNombreProyecto, inputEstadoProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { filtrarProyectos } from "./ProyectoController.js";
import { cerrarSesion } from "./ValidacionesController.js";

if (registroUsuario){
    registroUsuario.addEventListener('click', registrase)
}
    if (inicioSesionUsuario ) {
    inicioSesionUsuario.addEventListener('click', iniciarSesion)  
}
if(cerrarSesionBtn){cerrarSesionBtn.addEventListener('click',cerrarSesion)

}

    if(inputNombreProyecto){
  
    let debounceTimer;
    inputNombreProyecto.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            filtrarProyectos('nombre',true);;
        }, 1000);
    });
}
    
    
if(inputFechaProyecto){
    inputFechaProyecto.addEventListener('input', () => {
        filtrarProyectos('fecha',true);
    });}
    if(inputEstadoProyecto){

    inputEstadoProyecto.addEventListener('input', () => {
        filtrarProyectos('estado',true)

    })    
 
}








