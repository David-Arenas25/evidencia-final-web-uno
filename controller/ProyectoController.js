import { contenedorProyectos, inputEstadoProyecto, proyectos } from "../model/Proyectos.js";
import { inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";


export let nuevosProyectos = [];


function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cargarProyectos() {
    try {
        const storage = localStorage.getItem('arrayFiltro');
        const storageParse = JSON.parse(storage);

        if (Array.isArray(storageParse)) {
            console.log(`Storage: ${JSON.stringify(storageParse)}`);
            return storageParse;
        } else {
            // Asume que `proyectos` es un array por defecto
            console.log('No se encontraron proyectos en localStorage, usando la variable `proyectos`');
            return Array.isArray(proyectos) ? proyectos : [];
        }
    } catch (error) {
        console.error('Error al analizar el JSON de localStorage:', error);
        return Array.isArray(proyectos) ? proyectos : [];
    }
}



export function filtrarProyectos(filtro) {

    let arrayFiltro = cargarProyectos()
    const fechaProyecto = inputFechaProyecto.value
    const estadoProyecto = inputEstadoProyecto.value
    const nombreProyecto = inputNombreProyecto.value
    const warningMessage = document.getElementById('filter-warning');

    if (filtro === '' && estadoProyecto === 'Seleccione' && !fechaProyecto) {
        console.log('entro al 1')
        arrayFiltro = cargarProyectos()
    } else if (fechaProyecto && estadoProyecto === 'Seleccione' && !nombreProyecto && filtro === 'fecha') {
        console.log('entro al 2')
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
    } else if (filtro === 'estado' && !nombreProyecto && !fechaProyecto) {
        console.log('esto')

        if (estadoProyecto === 'Todos') {
            console.log('esto')

            arrayFiltro = proyectos.filter(proyecto => proyecto)
        } else if (estadoProyecto === 'Seleccione') {
            console.log('esto')
            arrayFiltro = cargarProyectos()
        } else {
            console.log('esto')

            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
        }

    } else if (nombreProyecto && !fechaProyecto && estadoProyecto !== 'Todos' && filtro !== 'estado') {

        console.log('entro al 4')
        arrayFiltro = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (nombreProyecto && fechaProyecto) {
        
            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
        if(estadoProyecto !== 'Seleccione' && estadoProyecto !== 'Todos'){ 
        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto && proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))
        
        }else if(estadoProyecto === 'Todos' || estadoProyecto === 'Seleccione'){
            console.log('fin3')
           arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))

        }}

        else if (estadoProyecto === 'Todos' && fechaProyecto && !nombreProyecto) {
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
            console.log('entro al 46666')
        }
        else if (estadoProyecto !== 'Seleccione' && fechaProyecto && filtro === 'estado' || filtro === 'fecha'){
            console.log('entro al 40jj')
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)
        }
         else if (fechaProyecto && filtro === 'fecha' && !nombreProyecto && !estadoProyecto) {
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)

        }
    else if (fechaProyecto && nombreProyecto && estadoProyecto === 'Seleccione') {
        console.log('entro al 6')
        console.log('entro a esta')
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (estadoProyecto && nombreProyecto && filtro !== 'Seleccione' && !fechaProyecto) {
        console.log('entro al 7')
        if (estadoProyecto === 'Todos') {
            console.log('seguramete')
            arrayFiltro = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))
        } else {
            console.log('entro al 9')

            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
            )
        }
    } else if (fechaProyecto && estadoProyecto === 'Seleccione' || estadoProyecto === 'Todos' && nombreProyecto) {
        console.log('entro al 33') 

        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (estadoProyecto === 'Seleccione' && !fechaProyecto) {
        console.log('entro al 8555')

        arrayFiltro = cargarProyectos()
    } else if (estadoProyecto === 'Todos' && !fechaProyecto && !nombreProyecto) {
        console.log('entro al 333666')

        arrayFiltro = proyectos
    }
    else {
        console.log('no entro a ninguon')
        arrayFiltro = cargarProyectos()
    }
    localStorage.setItem('arrayFiltro', JSON.stringify(arrayFiltro))

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

