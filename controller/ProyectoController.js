// controller/main.js
import { proyectos, contenedorProyectos, inputNombreProyecto, inputEstadoProyecto, inputFechaProyecto } from "../model/Proyectos.js";
import { inicioSesion } from "./ValidacionesController.js";

// Estado global para el filtro
export let filtro = "";


// Función para mostrar proyectos
function mostrarProyectos() {
    contenedorProyectos.innerHTML = ''; // Limpia el contenedor de proyectos

    const proyectosFiltrados = filtrarProyectos();

    // Crea tarjetas para cada proyecto filtrado
    proyectosFiltrados.forEach(proyecto => {
        const card = document.createElement('div');
        card.classList.add('card');    
        let estadoClass = '';
        switch (proyecto.estado) {
            case 'Completado':
                estadoClass = 'estado-completado';
                break;
            case 'En progreso':
                estadoClass = 'estado-en-progreso';
                break;
            case 'Pendiente':
                estadoClass = 'estado-pendiente';
                break;
        }
    
        card.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p><strong>Fecha:</strong> ${proyecto.fecha}</p>
            <p class="${estadoClass}"><strong>Estado:</strong> ${proyecto.estado}</p>
            <p><strong>Descripción:</strong> ${proyecto.descripcion}</p>
            <p><strong>Usuario:</strong> ${proyecto.usuario.name || 'No asignado'}</p>
        `;
    
        contenedorProyectos.append(card);
    });
}

// Función para filtrar proyectos
function filtrarProyectos() {
    const nombre = inputNombreProyecto.value.trim().toLowerCase();
    const estado = inputEstadoProyecto.value.trim();
    const fecha = inputFechaProyecto.value.trim();

    return proyectos.filter(proyecto => {
        return (
            (filtro === 'nombre' && proyecto.nombre.trim().toLowerCase().includes(nombre)) ||
            (filtro === 'estado' && proyecto.estado.includes(estado)) ||
            (filtro === 'fecha' && proyecto.fecha === fecha) ||
            (filtro === 'todos' && proyecto)
        );
    });
}

// Función para actualizar el filtro y mostrar proyectos
export const actualizarFiltro = (nuevoFiltro) => {
    filtro = nuevoFiltro;
    mostrarProyectos();
}


// Manejo de eventos para actualizar los filtros



