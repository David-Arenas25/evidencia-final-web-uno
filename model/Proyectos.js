const contenedorProyectos = document.getElementById("projects-container")
const inputNombreProyecto = document.getElementById("search-name")
const inputEstadoProyecto = document.getElementById("search-status")
const inputFechaProyecto = document.getElementById("search-date")



const proyectos = [
    {
        "nombre": "Desarrollo de Aplicación Móvil",
        "fecha": "2024-08-06",
        "estado": "En progreso",
        "descripcion": "Creación de una aplicación móvil para la gestión de tareas diarias.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de CRM",
        "fecha": "2024-09-01",
        "estado": "Completado",
        "descripcion": "Integración de un sistema CRM para mejorar la relación con los clientes.",
        "usuario": {}
    },
    {
        "nombre": "Rediseño del Sitio Web",
        "fecha": "2024-10-15",
        "estado": "Pendiente",
        "descripcion": "Actualización del diseño y funcionalidad del sitio web corporativo.",
        "usuario": {}
    },
    {
        "nombre": "Campaña de Marketing Digital",
        "fecha": "2024-07-20",
        "estado": "En progreso",
        "descripcion": "Lanzamiento de una campaña de marketing digital para aumentar la visibilidad de la marca.",
        "usuario": {}
    },
    {
        "nombre": "Automatización de Procesos",
        "fecha": "2024-11-05",
        "estado": "Pendiente",
        "descripcion": "Implementación de herramientas de automatización para optimizar los procesos internos.",
        "usuario": {}
    },
    {
        "nombre": "Capacitación de Personal",
        "fecha": "2024-06-15",
        "estado": "Completado",
        "descripcion": "Programa de capacitación para mejorar las habilidades del personal en nuevas tecnologías.",
        "usuario": {}
    },
    {
        "nombre": "Expansión Internacional",
        "fecha": "2024-12-01",
        "estado": "Pendiente",
        "descripcion": "Planificación y ejecución de la expansión de la empresa a mercados internacionales.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Producto",
        "fecha": "2024-08-25",
        "estado": "En progreso",
        "descripcion": "Creación de un nuevo producto innovador para satisfacer las necesidades del mercado.",
        "usuario": {}
    },
    {
        "nombre": "Migración a la Nube",
        "fecha": "2024-09-10",
        "estado": "En progreso",
        "descripcion": "Migración de los sistemas y datos de la empresa a una plataforma en la nube.",
        "usuario": {}
    },
    {
        "nombre": "Análisis de Datos",
        "fecha": "2024-10-30",
        "estado": "Pendiente",
        "descripcion": "Implementación de herramientas de análisis de datos para mejorar la toma de decisiones.",
        "usuario": {}
    }
]


export {
    proyectos,contenedorProyectos,inputNombreProyecto,inputEstadoProyecto,inputFechaProyecto
}