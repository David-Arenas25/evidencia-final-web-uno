import { inputEstadoProyecto, inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { actualizarFiltro } from "./ProyectoController.js";
import { validacionFormulario, validacionInicioSesionFormulario } from "../model/Validaciones.js";
import { iniciarSesion, inicioSesion } from "./ValidacionesController.js";
import registrase from "./ValidacionesController.js";



if (inputEstadoProyecto && inputNombreProyecto && inputFechaProyecto) {
    inputNombreProyecto.addEventListener('input', () => actualizarFiltro('nombre'));
    inputEstadoProyecto.addEventListener('input', () => actualizarFiltro('estado'));
    inputFechaProyecto.addEventListener('input', () => actualizarFiltro('fecha'));
    if(inicioSesion) {
    alert('debe inciar sesion para continuar')
    window.location.href = ('../index.html')//usar confirnm...

}
}
if (validacionFormulario) {
    validacionFormulario.addEventListener('click', registrase);
}
if (validacionInicioSesionFormulario) {
    validacionInicioSesionFormulario.addEventListener('click', iniciarSesion)
}

// Verificar si los valores están asignados
