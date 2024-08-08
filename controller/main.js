import { inputEstadoProyecto, inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { actualizarFiltro } from "./ProyectoController.js";
import { validacionFormulario, validacionInicioSesionFormulario } from "../model/Validaciones.js";
import { iniciarSesion } from "./ValidacionesController.js";
import { usuarios } from "./ValidacionesController.js";

import registrase from "./ValidacionesController.js";

// Verificar si los valores están asignados
if (inputEstadoProyecto && inputNombreProyecto && inputFechaProyecto) {
    inputNombreProyecto.addEventListener('input', () => actualizarFiltro('nombre'));
    inputEstadoProyecto.addEventListener('input', () => actualizarFiltro('estado'));
    inputFechaProyecto.addEventListener('input', () => actualizarFiltro('fecha'));





}



if(validacionFormulario){
    validacionFormulario.addEventListener('click', registrase);
}
if(validacionInicioSesionFormulario){
    validacionInicioSesionFormulario.addEventListener('click', iniciarSesion)
}