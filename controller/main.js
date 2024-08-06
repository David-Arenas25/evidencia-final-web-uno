import { inputEstadoProyecto, inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js"
import { actualizarFiltro } from "./ProyectoController.js";

inputNombreProyecto.addEventListener('input', () => actualizarFiltro('nombre'));
inputEstadoProyecto.addEventListener('input', () => actualizarFiltro('estado'));
inputFechaProyecto.addEventListener('input', () => actualizarFiltro('fecha'));
