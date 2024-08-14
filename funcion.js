


const searchName = document.querySelector('#search-name').value 
const searchDate = document.querySelector('#search-date').value
const searchStatus = document.querySelector('#search-status').value 

function filtrarProyectos(){
    

}

function crearProyectos(){
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

