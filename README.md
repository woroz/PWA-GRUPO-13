# Gestor de Peliculas - PWA GRUPO 13

Aplicación web para la gestion y organizacion de peliculas y series desarrollada en React.

---

## Integrantes del Grupo
* **Bascur Sofia Natali** - FAI-4306
* **Sastre Juan Ignacio** - FAI-4491
* **Gonzalez Marcos Nahuel** - FAI-4869

---

## Descripción de la Aplicación
El Gestor de Peliculas permite a los usuarios mantener un registro de sus producciones favoritas. La aplicación ofrece funcionalidades de:
* **Visualización:** Listado dinámico de películas con tarjetas detalladas.
* **Filtros:** Filtrado por genero (Accion, Comedia, Drama, etc.) y tipo (Pelicula o Serie).
* **Busqueda:** Buscador en tiempo real por titulo o director.
* **Ordenamiento:** Organización alfabetica (Ascendente/Descendente) y por año de estreno.
* **Gestion de Estado:** Marcado de contenidos como "Vistos" o "Pendientes".

---

## Guia de Instalacion y Ejecucion

Segui estos pasos para tener el proyecto funcionando localmente:

### 1. Clonar el repositorio
Abri una terminal y ejecuta:
```bash
git clone [https://github.com/woroz/PWA-GRUPO-13.git](https://github.com/woroz/PWA-GRUPO-13.git)
cd PWA-GRUPO-13
```

### 2. Instalar las dependencias
```bash
    npm install
```

### 3. Correr la aplicación
```bash
    npm run dev
 ```

La aplicación estara disponible en `http://localhost:3000`.

### Capturas de Pantalla
### Interfaz General
<img width="1919" height="940" alt="image" src="https://github.com/user-attachments/assets/8a342f62-a98d-46ab-89b7-042c6207e679" /> 

### Agregar Pelicula
<img width="1919" height="932" alt="image" src="https://github.com/user-attachments/assets/fe2f91be-3bc3-4e44-9669-a286a5d98761" />

### Contador de Contenido
<img width="1914" height="938" alt="image" src="https://github.com/user-attachments/assets/b57c61ac-fc66-450b-9e56-d2d9c540a0c6" />

### Filtro por Genero
<img width="1917" height="944" alt="image" src="https://github.com/user-attachments/assets/2a9e987b-aab5-4ab2-9f47-97c3e4212e3f" />

### Peliculas Vistas
<img width="1919" height="947" alt="image" src="https://github.com/user-attachments/assets/a8fa8a4e-785f-4faa-8026-fcc7907d1ee6" />

### Filtro por Tipo
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/816c552e-7349-465b-b92c-09970e389f7f" />

### Archivos Base

* **`index.jsx`**: Es el archivo principal del proyecto. Se importa React y se utiliza ReactDOM para renderizar el componente principal en el elemento raiz del HTML.
* **`App.jsx`**: El componente principal de la aplicacion. Se define la lógica principal, se gestiona el esrado global y se organiza la estructura de toda la interfaz
* **`index.css`**: Contiene los estilos globales que afectan a toda la aplicacion.
* **`package.json`**: El archivo de configuración del proyecto. Incluye las dependencias necesarias y los comandos para ejecutar la app.
