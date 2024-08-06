import { inputNombreProyecto } from "../model/Proyectos.js";
import { buscarPorNombreDeProyecto } from "./ProyectoController.js";


inputNombreProyecto.addEventListener("keyup",buscarPorNombreDeProyecto)