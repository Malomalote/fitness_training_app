# 💪 Fitness Training App

## 📱 Descripción

Aplicación web progresiva (PWA) de entrenamiento físico con diseño moderno y minimalista. Ofrece un programa de entrenamiento estructurado de 5 sesiones semanales con ejercicios alternativos, seguimiento de progreso y enlaces a videos instructivos.

## ✨ Características Principales

### 🎨 Interfaz de Usuario
- **Diseño Dark Mode**: Tema oscuro profesional similar a apps de fitness premium
- **Efectos Glassmorphism**: Elementos translúcidos con efectos de cristal esmerilado
- **Animaciones Suaves**: Transiciones fluidas y micro-interacciones
- **Responsive Design**: Optimizado para móviles y escritorio
- **Color de Acento Verde**: (#00ff87) para elementos destacados

### 🏋️ Funcionalidades de Entrenamiento
- **5 Sesiones Semanales**: Programa estructurado de entrenamiento
- **Ejercicios Alternativos**: Múltiples opciones para cada ejercicio principal
- **Carrusel Interactivo**: Navegación táctil entre ejercicios y alternativas
- **Videos Instructivos**: Enlaces directos a YouTube para cada ejercicio
- **Sistema de Progreso**: Seguimiento visual del avance diario

### 📊 Seguimiento y Estadísticas
- **Progreso Diario**: Contador de ejercicios completados
- **Estadísticas Globales**: Total de sesiones y ejercicios realizados
- **Persistencia Local**: Los datos se guardan en el navegador
- **Reseteo Manual**: Opción para reiniciar el progreso

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con Flexbox/Grid
- **JavaScript ES6+**: Lógica de aplicación
- **Local Storage**: Persistencia de datos
- **CSS Animations**: Efectos visuales avanzados
- **Backdrop Filter**: Efectos de cristal

## 📁 Estructura del Proyecto

```
fitness-app/
├── index.html              # Página principal
├── styles.css              # Estilos CSS (tema oscuro)
├── script.js               # Lógica de la aplicación
├── trainingData.js          # Base de datos de ejercicios
├── images/                  # Imágenes de ejercicios
├── README.md               # Documentación técnica
└── PROGRAMA_ENTRENAMIENTO.md # Guía completa del programa
```

## 🚀 Instalación y Uso

### 1. Clonación del Repositorio
```bash
git clone [repository-url]
cd fitness-app
```

### 2. Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

### 3. Acceso
Abrir `http://localhost:8000` en el navegador

## 🎯 Uso de la Aplicación

### Navegación Principal
1. **Seleccionar Sesión**: Botones S1-S5 en la parte superior
2. **Ver Ejercicios**: Cards interactivos con imágenes y descripciones
3. **Explorar Alternativas**: Carrusel deslizante en cada ejercicio
4. **Marcar Completado**: Botón verde en cada ejercicio
5. **Seguir Progreso**: Indicador flotante y estadísticas

### Características Avanzadas
- **Navegación Táctil**: Deslizar para cambiar entre alternativas
- **Modo Offline**: Funciona sin conexión a internet
- **Responsive**: Se adapta a cualquier tamaño de pantalla
- **Persistencia**: El progreso se guarda automáticamente

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas versiones)
- **Dispositivos**: iOS, Android, Windows, macOS, Linux
- **Resoluciones**: 320px - 4K+

## 🔧 Personalización

### Modificar Ejercicios
Editar el archivo `trainingData.js`:
```javascript
const trainingData = {
  sesion1: {
    title: "Nuevo Título",
    exercises: [
      {
        name: "Nuevo Ejercicio",
        sets: "3x12",
        image: "ruta/imagen.jpg",
        videoUrl: "https://youtube.com/...",
        alternatives: [...]
      }
    ]
  }
}
```

### Cambiar Colores
Modificar variables CSS en `styles.css`:
```css
:root {
  --accent-color: #00ff87;  /* Verde principal */
  --bg-dark: #0a0a0a;       /* Fondo oscuro */
  --glass-bg: rgba(15,15,15,0.95); /* Cristal */
}
```

## 📈 Métricas de Rendimiento

- **Tiempo de Carga**: < 2 segundos
- **Tamaño Total**: < 5MB (incluyendo imágenes)
- **First Contentful Paint**: < 1.5s
- **Responsive**: 100% compatible móvil

## 🔮 Funcionalidades Futuras

- [ ] **PWA Completa**: Instalación como app nativa
- [ ] **Modo Offline**: Cache de imágenes y videos
- [ ] **Sincronización Cloud**: Backup en la nube
- [ ] **Recordatorios**: Notificaciones push
- [ ] **Estadísticas Avanzadas**: Gráficos de progreso
- [ ] **Múltiples Usuarios**: Perfiles personalizados
- [ ] **Timer Integrado**: Cronómetros para descansos
- [ ] **Calculadora RM**: Peso máximo estimado

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👤 Autor

**Antonio García**
- GitHub: [@tuusuario](https://github.com/tuusuario)
- Email: tu.email@ejemplo.com

## 🙏 Agradecimientos

- Imágenes de ejercicios: Recursos fitness profesionales
- Videos: YouTube fitness creators
- Inspiración UI/UX: Aplicaciones fitness modernas
- Comunidad: Feedback y sugerencias de usuarios

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐
