import { contenedorProyectos, inputEstadoProyecto, proyectos } from "../model/Proyectos.js";
import { inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { proyectosContainer,noResultsMessage } from "../model/Proyectos.js";


export let nuevosProyectos = [];

function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cargarProyectos() {

      
        proyectosContainer.innerHTML = '';
        noResultsMessage.style.display = 'none';

        // Obtén el array del localStorage y parsea el JSON
        const storage = localStorage.getItem('arrayFiltro');
        const storageParse = JSON.parse(storage);

        // Verifica si el parseo devolvió un array y si está vacío
        if (storageParse.length === 0) {
            // Si no es un array o está vacío, muestra el mensaje de no resultados
            noResultsMessage.style.display = 'block';
      
            return [];
        }else{
            return storageParse
        }


    
}



export function filtrarProyectos(filtro) {
    let arrayFiltro = proyectos
    const fechaProyecto = inputFechaProyecto.value
    const estadoProyecto = inputEstadoProyecto.value
    const nombreProyecto = inputNombreProyecto.value
    const warningMessage = document.getElementById('filter-warning');
    if (filtro === '' && estadoProyecto === 'Seleccione' && !fechaProyecto) {
    } else if (fechaProyecto && estadoProyecto === 'Seleccione' && !nombreProyecto && filtro === 'fecha') {
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
    } else if (filtro === 'estado' && !nombreProyecto && !fechaProyecto) {
        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)

        if (estadoProyecto === 'Todos') {
            arrayFiltro = proyectos.filter(proyecto => proyecto)
        } else if (estadoProyecto === 'Seleccione') {
            arrayFiltro = cargarProyectos()

        } else if (fechaProyecto && estadoProyecto !== 'Seleccione' || estadoProyecto !== 'Todos') {
            if (filtro === 'fecha') {
                arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)
            } else if (filtro === 'estado') {
                arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)

            }
        } else {
            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
        }


    } else if (estadoProyecto && !fechaProyecto && !nombreProyecto && filtro === 'fecha') {

        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
    } else if (nombreProyecto && !fechaProyecto && estadoProyecto !== 'Todos' && filtro !== 'estado' && filtro !== 'nombre') {

        arrayFiltro = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (nombreProyecto && fechaProyecto) {

        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
        if (estadoProyecto !== 'Seleccione' && estadoProyecto !== 'Todos') {
            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto && proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))

        } else if (estadoProyecto === 'Todos' || estadoProyecto === 'Seleccione') {
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))

        }
    }

    else if (estadoProyecto === 'Todos' && fechaProyecto && !nombreProyecto && filtro !== 'nombre') {

        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
    }

    else if (!nombreProyecto && fechaProyecto) {
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)

        if (!nombreProyecto && estadoProyecto === 'Seleccione' && !fechaProyecto) {
            arrayFiltro = proyectos
           
        }
        else if (!nombreProyecto && estadoProyecto !== 'Seleccione' && estadoProyecto !== 'Todos') {

            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)


        } else if (estadoProyecto === 'Seleccione' && fechaProyecto) {
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
        
        } else {
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)


        }
    }
    else if (fechaProyecto && filtro === 'fecha' && !nombreProyecto && !estadoProyecto) {
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)

    }
    else if (fechaProyecto && nombreProyecto && estadoProyecto === 'Seleccione') {

        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (nombreProyecto && !fechaProyecto) {//sera?
      
        if (estadoProyecto === 'Todos' || estadoProyecto === 'Seleccione') {
       
            arrayFiltro = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))
        } else {
        

            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
            )
        }
    } else if (fechaProyecto && estadoProyecto === 'Seleccione' || estadoProyecto === 'Todos' && nombreProyecto) {

        

        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (estadoProyecto === 'Seleccione' && !fechaProyecto) {
       

        arrayFiltro = cargarProyectos()
    } else if (estadoProyecto === 'Todos' && !fechaProyecto && !nombreProyecto) {
  

        arrayFiltro = proyectos
    }
    else {

        arrayFiltro = proyectos
    }
    localStorage.setItem('arrayFiltro', JSON.stringify(arrayFiltro))

    crearProyectos(cargarProyectos())
}





export function crearProyectos(arr) {
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

