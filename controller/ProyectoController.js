import { proyectos, contenedorProyectos, inputNombreProyecto } from "../model/Proyectos.js"

function mostrarProyectos() {

}

export const buscarPorNombreDeProyecto = () => {
    const nombreInputTrim = inputNombreProyecto.value.trim().toLowerCase();
    const proyectoPrueba = proyectos.filter((proyecto) =>
        proyecto.nombre.trim().toLowerCase().includes(nombreInputTrim)
        
    );

    if(proyectoPrueba.length === 1){
        const contenedorNombre = document.createElement('p')
        proyectoPrueba.forEach((proyecto)=>{
            contenedorNombre.textContent = proyecto.nombre
            
        })
        contenedorProyectos.append(contenedorNombre)
    }else{
        console.log("fallo pa")
    }

};





const buscarPorEstadoDeProyecto = (event) => {
    const filtroPorEstadoProyecto = proyectos.filter((proyecto) => {
        proyecto.estado === event.target.value
        return filtroPorEstadoProyecto
    })

    return []
}

const buscarPorFechaDeProyecto = (event) => {

    const filtroPorFechaProyecto = proyectos.filter((proyecto) => {
        proyecto.fecha === event.target.value
    })

}


//se puede hacer con un switch 
