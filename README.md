# GestionEstudiantes2.0

El Sistema de Gestión de Estudiantes es una aplicación web diseñada para simplificar la administración académica en una institución educativa. Permite a los administradores registrar estudiantes, inscribirlos en materias, y a los profesores asignar calificaciones. Los alumnos pueden consultar sus notas y la información de sus materias de forma sencilla.

Este proyecto fue desarrollado utilizando Node.js, Express y MongoDB, siguiendo buenas prácticas de desarrollo para garantizar modularidad, escalabilidad y seguridad.

# Funcionalidades Principales
1-Gestión de Estudiantes: 
- Registro de nuevos estudiantes.
- Inscripción de estudiantes en materias.
2-Gestión de Profesores:
- Asignación de calificaciones a estudiantes.
3-Panel del Alumno:
- Consulta de materias inscritas y calificaciones.
4- Autenticación y Seguridad:
- Uso de JSON Web Tokens (JWT) para proteger rutas.
- Contraseñas encriptadas con bcrypt.
5-Base de Datos Escalable:
-Migración a MongoDB Atlas para almacenamiento de datos.

# Tecnologías Utilizadas
- Node.js: Framework para el desarrollo del backend.
- Express.js: Framework para la gestión de rutas y middleware.
- MongoDB Atlas: Base de datos NoSQL para almacenamiento de datos.
- Pug: Motor de plantillas para la generación de vistas dinámicas.
- JWT: Para autenticación de usuarios.
- bcrypt: Para encriptación de contraseñas.
- Hosting: Aplicación desplegada en Vercel.
