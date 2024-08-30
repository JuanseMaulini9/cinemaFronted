# Cine Frontend

Este repositorio contiene el frontend para una aplicación de cine que muestra horarios de funciones y permite realizar reservas de asientos. La aplicación interactúa con el backend para gestionar funciones y cines.

## Características

- **Visualización de Funciones y Cines:** Muestra las películas y cines disponibles.
- **Interacción con el Usuario:** Permite ver detalles de cines y películas, así como realizar reservas.
- **Autenticación:** Proporciona funcionalidades de inicio de sesión y registro utilizando JWT (JSON Web Tokens).

## Tecnologías Utilizadas

- **React:** Biblioteca para construir interfaces de usuario.
- **Redux Toolkit:** Maneja el estado global de la aplicación.
- **Tailwind CSS:** Utilizado para el diseño y la estilización de la interfaz.
- **React Router:** Para la gestión de rutas y navegación en la aplicación.

## Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tuusuario/cine-frontend.git
    ```

2. **Navega al directorio del proyecto:**
    ```bash
    cd cine-frontend
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

4. **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

5. **Inicia la aplicación:**
    ```bash
    npm start
    ```

## Rutas

- **/movies:** Página que muestra todas las películas.
- **/movie/:id:** Página con detalles de una película específica.
- **/threaters:** Página que muestra todos los cines.
- **/threater/:id:** Página con detalles de un cine específico.
