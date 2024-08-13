export const contenedorProyectos = document.querySelector(".project-list");
export const inputNombreProyecto = document.querySelector("#search-name");
export const inputEstadoProyecto = document.querySelector("#search-status");
export const inputFechaProyecto = document.querySelector("#search-date");
export const buscarProyectos = document.querySelector("#buscar");
export const cerrarSesionBtn = document.querySelector('.logout-button')


export let proyectos = [
    {
        "nombre": "Desarrollo de Aplicación Móvil",
        "fecha": "2024-08-06",
        "estado": "En progreso",
        "descripcion": "Creación de una aplicación móvil para la gestión de tareas diarias.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Sitio Web",
        "fecha": "2024-09-15",
        "estado": "Completado",
        "descripcion": "Mejora del rendimiento y usabilidad del sitio web principal.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de CRM",
        "fecha": "2024-11-01",
        "estado": "En progreso",
        "descripcion": "Integración de un sistema de gestión de relaciones con clientes.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Identidad Corporativa",
        "fecha": "2024-07-20",
        "estado": "Pendiente",
        "descripcion": "Creación de un nuevo diseño de marca y material gráfico.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Sistema de Facturación",
        "fecha": "2024-10-10",
        "estado": "En progreso",
        "descripcion": "Implementación de un sistema automatizado de facturación y cobros.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Base de Datos",
        "fecha": "2024-08-30",
        "estado": "Completado",
        "descripcion": "Mejora de la estructura y rendimiento de la base de datos principal.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de API REST",
        "fecha": "2024-09-01",
        "estado": "En progreso",
        "descripcion": "Creación de una API RESTful para la integración de servicios externos.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Seguridad",
        "fecha": "2024-11-15",
        "estado": "Pendiente",
        "descripcion": "Mejora de los protocolos de seguridad y encriptación de datos.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Interfaz de Usuario",
        "fecha": "2024-08-20",
        "estado": "En progreso",
        "descripcion": "Creación de un diseño de interfaz de usuario atractivo y funcional.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Aplicación de Escritorio",
        "fecha": "2024-10-01",
        "estado": "Pendiente",
        "descripcion": "Creación de una aplicación de escritorio para la gestión de inventarios.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Procesos de Negocio",
        "fecha": "2024-09-10",
        "estado": "Completado",
        "descripcion": "Mejora de los procesos internos y eficiencia de la empresa.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Gestión de Proyectos",
        "fecha": "2024-11-01",
        "estado": "En progreso",
        "descripcion": "Integración de una herramienta para la gestión eficiente de proyectos.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Campaña de Marketing Digital",
        "fecha": "2024-08-15",
        "estado": "Pendiente",
        "descripcion": "Creación de una estrategia de marketing digital para aumentar la visibilidad.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Aplicación de Inteligencia Artificial",
        "fecha": "2024-10-20",
        "estado": "En progreso",
        "descripcion": "Implementación de tecnologías de inteligencia artificial para mejorar los servicios.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Estrategia de SEO",
        "fecha": "2024-09-05",
        "estado": "Completado",
        "descripcion": "Mejora del posicionamiento en motores de búsqueda para aumentar el tráfico.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Gestión de Contenidos",
        "fecha": "2024-11-10",
        "estado": "En progreso",
        "descripcion": "Integración de una plataforma para la gestión eficiente de contenidos web.",
        "usuario": {}
    },
    {
        "nombre": "Diseño de Aplicación de Realidad Aumentada",
        "fecha": "2024-08-25",
        "estado": "Pendiente",
        "descripcion": "Creación de una aplicación que combine elementos virtuales con el mundo real.",
        "usuario": {}
    },
    {
        "nombre": "Desarrollo de Sistema de Análisis de Datos",
        "fecha": "2024-10-15",
        "estado": "En progreso",
        "descripcion": "Implementación de herramientas para el análisis y visualización de datos.",
        "usuario": {}
    },
    {
        "nombre": "Optimización de Experiencia de Usuario",
        "fecha": "2024-09-01",
        "estado": "Completado",
        "descripcion": "Mejora de la usabilidad y satisfacción del usuario en la plataforma web.",
        "usuario": {}
    },
    {
        "nombre": "Implementación de Sistema de Gestión de Recursos Humanos",
        "fecha": "2024-11-20",
        "estado": "En progreso",
        "descripcion": "Integración de una herramienta para la gestión eficiente del personal.",
        "usuario": {}
    }
];
