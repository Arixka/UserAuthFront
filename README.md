
# UserAuthFront

## Descripción

Frontend en React diseñado para interactuar con el microservicio `microUserAuth` y gestionar la autenticación de usuarios. Este proyecto permite a los usuarios registrarse, iniciar sesión y manejar sesiones de usuario, asegurando una experiencia de usuario intuitiva y segura.

## Características
- **Formulario de Login y Registro**: Permite a los usuarios registrarse y acceder a su cuenta.
- **Manejo de Tokens**: Utiliza tokens JWT para la autenticación, almacenándolos de manera segura en `localStorage`.
- **Manejo de Errores**: Muestra mensajes de error específicos en caso de credenciales incorrectas o problemas en el servidor.
- **Estilo y Usabilidad**: Utiliza Material-UI para un diseño limpio y responsivo.

## Tecnologías Utilizadas
- **React**: Framework para la interfaz de usuario.
- **Axios**: Cliente HTTP para comunicación con la API.
- **React Context API**: Para la gestión de estado de autenticación y tokens.
- **Material-UI**: Para componentes visuales y diseño.

## Configuración y Uso

### Requisitos
- **Node.js** (versión 14.x o superior)
- **npm** o **yarn**

### Instalación
1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/UserAuthFront.git
   ```

2. **Instalar las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar la aplicación en modo desarrollo**:

   ```bash
   npm start
   ```

### Variables de Entorno
Asegúrate de crear un archivo `.env` en la raíz del proyecto con las variables necesarias, como la URL del backend (`REACT_APP_API_URL=http://localhost:8080`).

### Documentación de la API
Esta aplicación interactúa con los siguientes endpoints del backend:
- **POST /users**: Para registro de nuevos usuarios.
- **POST /login**: Para autenticación de usuarios y generación de tokens JWT.

## Licencia
Este proyecto está licenciado bajo la MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para consultas o más información, puedes contactarme en:
[![Gmail](https://img.shields.io/badge/-Gmail-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:marisiver25@gmail.com)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/maria-siverio/)
