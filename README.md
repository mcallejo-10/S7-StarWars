# 🚀 Star Wars Starships Explorer - Angular Project

## 📝 Descripción
Este proyecto es una aplicación web desarrollada en Angular que muestra información sobre las naves espaciales del universo Star Wars. La aplicación consume datos de la API SWAPI (Star Wars API) y permite a los usuarios explorar un catálogo de naves con sus detalles específicos.

## 🛠 Tecnologías Utilizadas
- Angular 18
- TypeScript
- HTML5 & Sass
- Bootstrap
- RxJS para manejo de estados y llamadas asíncronas
- Angular Guards para protección de rutas
- JWT para autenticación
- JSON Server Auth para backend de autenticación
- Jasmine y Karma para testing

## 🌟 Características
- Listado de naves espaciales de Star Wars
- Vista detallada de cada nave
- Paginación de resultados
- Visualización de imágenes de las naves
- Sistema de autenticación completo (registro y login)
- Rutas protegidas
- Diseño responsive
- Información detallada de pilotos y películas por nave
- Tests unitarios

## 🎯 Requisitos Previos
- Node.js (versión 14+)
- npm o yarn
- Angular CLI


## 🚀 Instalación y Configuración

### Frontend
```bash
# Clonar el repositorio
git clone https://github.com/mcallejo-10/S7-StarWars.git

# Navegar al directorio del proyecto
cd S7-StarWars

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
ng serve
```

### Backend (JSON Server Auth)
```bash
# Iniciar el servidor de autenticación
npx json-server-auth db.json
```


## 🔒 Sistema de Autenticación

### Características de Autenticación
- Registro de usuarios con validación de email único
- Login automático después del registro
- Protección de rutas mediante Guards
- Redirección a la página anterior después del login
- Almacenamiento de tokens JWT


## 🚢 Componentes Principales

### 1. Lista de Naves
- Vista protegida por AuthGuard
- Paginación de 10 items por página
- Implementación de lazy loading

### 2. Detalle de Nave
- Información completa de la nave
- Componente de pilotos relacionados
- Componente de películas relacionadas
- Diseño basado en la web oficial de Star Wars

### 3. Componente de Pilotos
- Muestra tarjetas de pilotos relacionados con la nave
- Consumo de endpoint específico de pilotos
- Diseño responsive de tarjetas

### 4. Componente de Películas
- Visualización de películas donde aparece la nave
- Integración con la API de películas
- Diseño consistente con el tema de Star Wars

## 🧪 Testing

### Configuración de Tests
```bash
# Ejecutar todos los tests
ng test
```

## 📚 Recursos y Referencias
- [Documentación de Angular](https://angular.io/docs)
- [Documentación de SWAPI](https://swapi.dev/documentation)
- [JSON Server Auth Documentation](https://github.com/jeremyben/json-server-auth)
- [Web Oficial de Star Wars](https://www.starwars.com/) (referencia de diseño)

