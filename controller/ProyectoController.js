import { contenedorProyectos, inputEstadoProyecto, proyectos } from "../model/Proyectos.js";
import { inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { cerrarSesion, iniciarSesion, inicioSesion, validarRegistro } from "./ValidacionesController.js";


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



export function filtrarProyectos(filtro,inicio) { 
    const urlActual = window.location.pathname;
    setTimeout(() => {
            console.log('cargando')
if (urlActual === "/view/proyecto.html" && inicio === true) {
    console.log('entro por aca')
    let arrayFiltro = proyectos
    const fechaProyecto = inputFechaProyecto.value
    const estadoProyecto = inputEstadoProyecto.value
    const nombreProyecto = inputNombreProyecto.value
    const warningMessage = document.getElementById('filter-warning');
    if (filtro === '' && estadoProyecto === 'Seleccione' && !fechaProyecto) {
        console.log('entro al 1')
    } else if (fechaProyecto && estadoProyecto === 'Seleccione' && !nombreProyecto && filtro === 'fecha') {
        console.log('entro al 2')
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
    } else if (filtro === 'estado' && !nombreProyecto && !fechaProyecto ) {        
        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
   
        if (estadoProyecto === 'Todos') {         
            arrayFiltro = proyectos.filter(proyecto => proyecto)
        } else if (estadoProyecto === 'Seleccione') {
            console.log('esto')
            arrayFiltro = cargarProyectos()
        
        } else if(fechaProyecto && estadoProyecto !== 'Seleccione' || estadoProyecto !== 'Todos') {
            console.log('no tiene')
            if(filtro === 'fecha'){
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)
            }else if(filtro === 'estado'){
        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)

            }
        }else{
            console.log('esto')
            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
        }
        

    }else if(estadoProyecto && !fechaProyecto && !nombreProyecto && filtro === 'fecha'){
        console.log('mijo estado')
        
        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
    } else if (nombreProyecto && !fechaProyecto && estadoProyecto !== 'Todos' && filtro !== 'estado' && filtro !== 'nombre') {

        console.log('entro al 4')
        arrayFiltro = proyectos.filter(proyecto => normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (nombreProyecto && fechaProyecto) {

        arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
        if (estadoProyecto !== 'Seleccione' && estadoProyecto !== 'Todos') {
            arrayFiltro = proyectos.filter(proyecto => proyecto.estado === estadoProyecto && proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))

        } else if (estadoProyecto === 'Todos' || estadoProyecto === 'Seleccione') {
            console.log('fin3')
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase())))

        }
    }

    else if (estadoProyecto === 'Todos' && fechaProyecto && !nombreProyecto && filtro !== 'nombre') {
     
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
        console.log('entro al 46666')
    }

        else if (!nombreProyecto && fechaProyecto){
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
            console.log('entro al noseque')
         
         if( !nombreProyecto && estadoProyecto === 'Seleccione' && !fechaProyecto ) {
            arrayFiltro = proyectos
            console.log('nosequesito')
        }
      else if(!nombreProyecto && estadoProyecto  !== 'Seleccione' && estadoProyecto !== 'Todos'){      

            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)
            console.log('entro al nosequedeabajao')

        }else if(estadoProyecto === 'Seleccione' && fechaProyecto){
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
            console.log('gano papa palb')
        }else{
            arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && proyecto.estado === estadoProyecto)
            console.log('acaa')

        }
    }
    else if (fechaProyecto && filtro === 'fecha' && !nombreProyecto && !estadoProyecto) {
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)

    }
    else if (fechaProyecto && nombreProyecto && estadoProyecto === 'Seleccione') {
        console.log('entro al 6')
        console.log('entro a esta')
        arrayFiltro = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto && normalizeString(proyecto.nombre.toLowerCase()).includes(normalizeString(nombreProyecto.toLowerCase()))
        )
    } else if (nombreProyecto &&  !fechaProyecto ) {//sera?
        console.log('entro al 7')
        if (estadoProyecto === 'Todos' || estadoProyecto === 'Seleccione') {
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
        arrayFiltro = proyectos
    }
    localStorage.setItem('arrayFiltro', JSON.stringify(arrayFiltro))

    crearProyectos(cargarProyectos())
}else if(inicio === false && urlActual === '/view/proyecto.html'){
    console.log('mijo apague')
    window.location.href = "/index.html";
}


    }, 2000);


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

}