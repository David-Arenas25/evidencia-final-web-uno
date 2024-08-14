import { contenedorProyectos, inputEstadoProyecto, proyectos } from "../model/Proyectos.js";
import { inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";


export let nuevosProyectos = [];


function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cargarProyectos(){
    const storage = localStorage.getItem('arrayFiltro')
    const storageParse = JSON.parse(storage)
    return storageParse || proyectos
}

export function filtrarProyectos(filtro) {
    const propyectosCargados = cargarProyectos()
    const fechaProyecto = inputFechaProyecto.value
    const estadoProyecto = inputEstadoProyecto.value
    const nombreProyecto = inputNombreProyecto.value
    let arrayFiltro = proyectos
    switch (filtro) {
        case 'fecha':
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
            break;
        case 'nombre':
            arrayFiltro = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))
            break;
        case 'estado':
            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
            break;
        default:
            arrayFiltro = propyectosCargados
            break;
     

    }
    localStorage.setItem('arrayFiltro',JSON.stringify(arrayFiltro))

    crearProyectos(cargarProyectos())
}


function crearProyectos(arr) {
   
    contenedorProyectos.innerHTML = '';
    arr.forEach(proyecto => {
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


