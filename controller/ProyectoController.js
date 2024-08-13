import { contenedorProyectos, inputEstadoProyecto, proyectos } from "../model/Proyectos.js";
import { inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";


export let nuevosProyectos = [];

export function getAll() {
    filtrarProyectos('Todos')
}
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


export function filtrarProyectos(filtro) {    
    const fechaProyecto = inputFechaProyecto.value
    const estadoProyecto = inputEstadoProyecto.value
    const nombreProyecto = inputNombreProyecto.value
    const arrayFiltroFecha = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
    const arrayFiltroEstado = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
    const arrayFiltroNombre = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))
    let proyectosActualizadoString = localStorage.getItem('nuevosProyectos')
    let proyectosActualizadoStorage = JSON.parse(proyectosActualizadoString)

    if (filtro === '') {
        console.log('entro')
        if (!proyectosActualizadoStorage) {
            nuevosProyectos = proyectos
        } else {
            nuevosProyectos = proyectosActualizadoStorage
        }    }
    else if (filtro === 'Todos') {
        nuevosProyectos = proyectos
    }
    else if (filtro === 'fecha') {
        nuevosProyectos = arrayFiltroFecha
    }
    else if (filtro === 'estado') {
        nuevosProyectos = arrayFiltroEstado
    }
    else if (filtro === 'nombre') {

        nuevosProyectos = arrayFiltroNombre
    }
    else if (filtro = 'nose') {
        nuevosProyectos = [...nuevosProyectos]
    }
    if (nuevosProyectos) {
        localStorage.setItem('nuevosProyectos', JSON.stringify(nuevosProyectos))
    } else {
        localStorage.setItem('nuevosProyectos', JSON.stringify(proyectos))
    }

    contenedorProyectos.innerHTML = '';
    proyectosActualizadoStorage.forEach(proyecto => {
        const contenedor = document.createElement('div');
        contenedor.classList.add('project');
        const titulo = document.createElement('h2');
        titulo.innerText = proyecto.nombre;
        const fecha = document.createElement('p');
        fecha.innerText = proyecto.fecha;
        const estado = document.createElement('p');
        estado.innerText = proyecto.estado;
        if (proyecto.estado === 'Completado') {
            contenedor.classList.add('completado');
        } else if (proyecto.estado === 'Pendiente') {
            contenedor.classList.add('pendiente');
        } else if (proyecto.estado.trim() === 'En progreso') {
            contenedor.classList.add('en-progreso');
        }
        contenedor.append(titulo, fecha, estado);
        contenedorProyectos.append(contenedor);

    });


}