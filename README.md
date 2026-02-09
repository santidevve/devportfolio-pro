# 🚀 DevPortfolio Pro

> Portfolio personal profesional para desarrolladores, construido con Flask y diseño moderno.

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📋 Descripción

**DevPortfolio Pro** es un sitio web de portfolio personal diseñado para desarrolladores y profesionales de tecnología. Presenta una estética moderna con tema oscuro, animaciones suaves y diseño totalmente responsivo.

### ✨ Características

- 🎨 **Diseño moderno y elegante** - Tema oscuro con gradientes y glassmorphism
- 📱 **Totalmente responsivo** - Se adapta a cualquier dispositivo
- ⚡ **Animaciones suaves** - Reveal animations al hacer scroll
- 📧 **Formulario de contacto** - Integración con Flask-Mail para envío de correos
- 🔗 **Links a redes sociales** - GitHub, LinkedIn, Instagram con iconos SVG
- 🏢 **Sección de clientes** - Muestra logos de empresas con las que has trabajado
- 💼 **Proyectos destacados** - Grid de tarjetas con tus proyectos de GitHub
- 📜 **Timeline de experiencia** - Historial profesional visualmente atractivo
- 🎓 **Sección de educación** - Formación académica y certificaciones

## 🛠️ Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| **Backend** | Python 3.9+, Flask 3.1.2 |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Email** | Flask-Mail |
| **Fuentes** | Google Fonts (Cormorant Garamond, Space Grotesk) |
| **Iconos** | SVG inline |

## 📂 Estructura del Proyecto

```
devportfolio-pro/
├── portfolio.py          # Aplicación principal Flask
├── requirements.txt      # Dependencias Python
├── .env                  # Variables de entorno (no incluir en git)
├── .gitignore           # Archivos ignorados por git
├── static/
│   ├── styles.css       # Estilos principales
│   ├── scripts.js       # JavaScript para animaciones
│   ├── contactForm.js   # Lógica del formulario de contacto
│   ├── cv-photo.png     # Foto de perfil
│   ├── logo.png         # Logo cliente 1
│   └── logo_vitca.png   # Logo cliente 2
├── templates/
│   ├── index.html       # Página principal
│   └── contactForm.html # Formulario de contacto
└── venv/                # Entorno virtual Python
```

## 🚀 Instalación

### Prerrequisitos

- Python 3.9 o superior
- pip (gestor de paquetes Python)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/santidevve/devportfolio-pro.git
   cd devportfolio-pro
   ```

2. **Crear entorno virtual**
   ```bash
   python -m venv venv
   ```

3. **Activar entorno virtual**
   
   - **Windows:**
     ```bash
     .\venv\Scripts\activate
     ```
   - **Linux/Mac:**
     ```bash
     source venv/bin/activate
     ```

4. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

5. **Configurar variables de entorno**
   
   Crea un archivo `.env` con las siguientes variables:
   ```env
   MAIL_USERNAME=tu_email@gmail.com
   MAIL_PASSWORD=tu_contraseña_de_aplicacion
   ```

6. **Ejecutar la aplicación**
   ```bash
   python portfolio.py
   ```

7. **Abrir en el navegador**
   ```
   http://localhost:5000
   ```

## ⚙️ Configuración del Email

Para que el formulario de contacto funcione, necesitas configurar una cuenta de Gmail con contraseña de aplicación:

1. Ve a [Google Account Security](https://myaccount.google.com/security)
2. Activa la verificación en dos pasos
3. Genera una "Contraseña de aplicación"
4. Usa esa contraseña en la variable `MAIL_PASSWORD`

## 📸 Capturas de Pantalla

### Hero Section
La sección principal con foto de perfil, descripción y enlaces a redes sociales.

### Proyectos
Grid responsivo con tarjetas de proyectos destacados de GitHub.

### Experiencia
Timeline visual con el historial profesional.

## 🎨 Personalización

### Colores
Los colores se definen como variables CSS en `static/styles.css`:

```css
:root {
  --bg: #0b0f1d;           /* Fondo principal */
  --bg-soft: #12182a;       /* Fondo secundario */
  --muted: #9aa6c5;         /* Texto secundario */
  --accent: #ff8c42;        /* Color de acento (naranja) */
  --accent-2: #2dd4bf;      /* Color de acento secundario (turquesa) */
  --card: #111827;          /* Fondo de tarjetas */
  --text: #f8fafc;          /* Texto principal */
}
```

### Contenido
Edita `templates/index.html` para personalizar:
- Información personal
- Proyectos destacados
- Experiencia laboral
- Educación
- Enlaces a redes sociales

## 📄 Rutas Disponibles

| Ruta | Método | Descripción |
|------|--------|-------------|
| `/` | GET | Página principal del portfolio |
| `/contact` | GET | Formulario de contacto |
| `/send-email` | POST | Endpoint para enviar emails |

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios mayores:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Santiago Hernandez Pontiles**

- 🌐 Portfolio: [localhost:5000](http://localhost:5000)
- 💼 LinkedIn: [santiago-hernández-385469323](https://www.linkedin.com/in/santiago-hernández-385469323)
- 🐙 GitHub: [@santidevve](https://github.com/santidevve)
- 📸 Instagram: [@santiagopontiles](https://www.instagram.com/santiagopontiles/)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub.
