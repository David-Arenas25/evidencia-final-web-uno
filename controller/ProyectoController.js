import { contenedorProyectos, inputEstadoProyecto, proyectos } from "../model/Proyectos.js";
import { inputNombreProyecto, inputFechaProyecto } from "../model/Proyectos.js";


let nuevosProyectos = [];

// Function to create and display projects
export function crearProyectos() {
    contenedorProyectos.innerHTML = ''; // Clear the container before adding new projects

    nuevosProyectos.forEach(proyecto => {
        const contenedor = document.createElement('div');
        contenedor.classList.add('project');
        const titulo = document.createElement('h2');
        titulo.innerText = proyecto.nombre;
        const fecha = document.createElement('p');
        fecha.innerText = proyecto.fecha;
        const estado = document.createElement('p');
        estado.innerText = proyecto.estado;

        // Add class based on project status
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


export function filtrarProyectos(filtro){
    console.log('entro')
    const fechaProyecto = inputFechaProyecto.value 
    const estadoProyecto = inputEstadoProyecto.value
    const nombreProyecto = inputNombreProyecto.value
    const arrayFiltroFecha = proyectos.filter(proyecto => proyecto.fecha === fechaProyecto)
    const arrayFiltroEstado = proyectos.filter(proyecto => proyecto.estado === estadoProyecto)
    const arrayFiltroNombre = proyectos.filter(proyecto => proyecto.nombre.match(nombreProyecto))
    console.log(arrayFiltroEstado)
    if(arrayFiltroFecha && arrayFiltroNombre && arrayFiltroEstado){
    switch (filtro) {
        case 'fecha':
            nuevosProyectos = arrayFiltroFecha 
            console.log("paso algo")
            break;
        case 'estado':
            nuevosProyectos =  arrayFiltroEstado
            console.log("paso algo")
            break;
        case 'nombre':
            nuevosProyectos =  arrayFiltroNombre
            console.log("paso algo")
            break;    
        default:
            console.log("no paso nada")
            break;
            }
    crearProyectos()  
}
  return nuevosProyectos
}
