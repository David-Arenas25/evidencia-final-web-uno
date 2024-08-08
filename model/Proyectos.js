const contenedorProyectos = document.getElementById("projects-container")
const inputNombreProyecto = document.getElementById("search-name")
const inputEstadoProyecto = document.getElementById("search-status")
const inputFechaProyecto = document.getElementById("search-date")



const proyectos = [
    {
        "nombre": "Desarrollo de Aplicación Móvil",
        "fecha": "06/08/2024",
        "estado": "En progreso",
        "descripcion": "Creación de una aplicación móvil para la gestión de tareas diarias.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Sitio Web",
        "fecha": "15/09/2024",
        "estado": "Completado",
        "descripcion": "Mejora del rendimiento y usabilidad del sitio web principal.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de CRM",
        "fecha": "01/11/2024",
        "estado": "En progreso",
        "descripcion": "Integración de un sistema de gestión de relaciones con clientes.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Identidad Corporativa",
        "fecha": "20/07/2024",
        "estado": "Pendiente",
        "descripcion": "Creación de un nuevo diseño de marca y material gráfico.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Sistema de Facturación",
        "fecha": "10/10/2024",
        "estado": "En progreso",
        "descripcion": "Implementación de un sistema automatizado de facturación y cobros.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Base de Datos",
        "fecha": "30/08/2024",
        "estado": "Completado",
        "descripcion": "Mejora de la estructura y rendimiento de la base de datos principal.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de API REST",
        "fecha": "01/09/2024",
        "estado": "En progreso",
        "descripcion": "Creación de una API RESTful para la integración de servicios externos.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Seguridad",
        "fecha": "15/11/2024",
        "estado": "Pendiente",
        "descripcion": "Mejora de los protocolos de seguridad y encriptación de datos.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Interfaz de Usuario",
        "fecha": "20/08/2024",
        "estado": "En progreso",
        "descripcion": "Creación de un diseño de interfaz de usuario atractivo y funcional.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Aplicación de Escritorio",
        "fecha": "01/10/2024",
        "estado": "Pendiente",
        "descripcion": "Creación de una aplicación de escritorio para la gestión de inventarios.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Procesos de Negocio",
        "fecha": "10/09/2024",
        "estado": "Completado",
        "descripcion": "Mejora de los procesos internos y eficiencia de la empresa.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Gestión de Proyectos",
        "fecha": "01/11/2024",
        "estado": "En progreso",
        "descripcion": "Integración de una herramienta para la gestión eficiente de proyectos.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Campaña de Marketing Digital",
        "fecha": "15/08/2024",
        "estado": "Pendiente",
        "descripcion": "Creación de una estrategia de marketing digital para aumentar la visibilidad.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Aplicación de Inteligencia Artificial",
        "fecha": "20/10/2024",
        "estado": "En progreso",
        "descripcion": "Implementación de tecnologías de inteligencia artificial para mejorar los servicios.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Estrategia de SEO",
        "fecha": "05/09/2024",
        "estado": "Completado",
        "descripcion": "Mejora del posicionamiento en motores de búsqueda para aumentar el tráfico.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Gestión de Contenidos",
        "fecha": "10/11/2024",
        "estado": "En progreso",
        "descripcion": "Integración de una plataforma para la gestión eficiente de contenidos web.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Aplicación de Realidad Aumentada",
        "fecha": "25/08/2024",
        "estado": "Pendiente",
        "descripcion": "Creación de una aplicación que combine elementos virtuales con el mundo real.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Sistema de Análisis de Datos",
        "fecha": "15/10/2024",
        "estado": "En progreso",
        "descripcion": "Implementación de herramientas para el análisis y visualización de datos.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Experiencia de Usuario",
        "fecha": "01/09/2024",
        "estado": "Completado",
        "descripcion": "Mejora de la usabilidad y satisfacción del usuario en la plataforma web.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Gestión de Recursos Humanos",
        "fecha": "20/11/2024",
        "estado": "En progreso",
        "descripcion": "Integración de una herramienta para la gestión eficiente del personal.",
        "usuario": {}
    }
];

export {
    proyectos,contenedorProyectos,inputNombreProyecto,inputEstadoProyecto,inputFechaProyecto
}