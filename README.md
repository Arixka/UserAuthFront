
# UserAuthFront

UserAuthFront es un proyecto frontend desarrollado en React que permite la autenticación de usuarios. 
Este proyecto interactúa con un backend llamado `microUserAuth` que maneja la lógica de autenticación 
y almacenamiento de usuarios. La aplicación está diseñada con un enfoque en seguridad y usabilidad, 
utilizando técnicas modernas para la gestión de estado y la comunicación con APIs.

## Características

- **Login y Registro de Usuarios**: Formulario de autenticación (login) y formulario de registro de nuevos usuarios.
- **Manejo de Tokens**: Utiliza tokens JWT para la autenticación del usuario, que se almacenan de manera segura en `localStorage`.
- **Manejo de Errores y Retroalimentación**: Muestra mensajes de error específicos en caso de credenciales incorrectas o errores de servidor.
- **Estilo y Usabilidad**: Interfaz construida con Material-UI para lograr un diseño limpio y responsivo.

## Tecnologías Utilizadas

- **React**: Para la construcción de la interfaz de usuario.
- **Axios**: Para las solicitudes HTTP al backend (`microUserAuth`).
- **React Context API**: Para la gestión de estado de autenticación y tokens.
- **Material-UI**: Para el diseño y componentes de la interfaz.

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Arixka/UserAuthFront.git
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm start
   ```

## Dependencias

- **React Router DOM**: Para la navegación en la aplicación.
- **Material-UI**: Librería de componentes de interfaz.
- **Axios**: Cliente HTTP para la comunicación con la API.

## Configuración del Backend

Este frontend está diseñado para funcionar junto con el proyecto `microUserAuth`, que debe estar ejecutándose en `http://localhost:8080`.

## Licencia

Este proyecto está licenciado bajo la MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.
