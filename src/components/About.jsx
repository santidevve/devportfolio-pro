export default function About() {
  return (
    <section id="about" style={{ backgroundColor: 'var(--accent-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <div>
            <h2>Sobre mí</h2>
            <p style={{ textAlign: 'justify' }}>
              Soy Santiago Hernandez, Ingeniero Industrial y Desarrollador Full-Stack radicado en Venezuela. Mi trayectoria profesional me ha enseñado que la tecnología y la eficiencia operativa deben ir de la mano. No me conformo con que una web simplemente "funcione"; mi objetivo es desarrollar soluciones digitales que se conviertan en una pieza clave para la maquinaria y el crecimiento de tu empresa.
            </p>
            <p style={{ textAlign: 'justify' }}>
              A lo largo de mi carrera, he liderado la transición digital de negocios con modelos híbridos, ayudando a emprendedores y corporaciones a escalar mediante la automatización de procesos, el manejo inteligente de datos y el rediseño de su presencia online.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Desde el diseño UX/UI y el desarrollo integral hasta la gestión de dominios y hosting empresarial, me encargo de todo el ciclo de vida del producto.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Tecnologías Manejadas</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['React', 'Flask', 'Python', 'Node.js', 'SQL', 'JavaScript', 'CSS'].map(tech => (
                <span 
                  key={tech} 
                  style={{ 
                    padding: '0.5rem 1rem', 
                    backgroundColor: 'var(--bg-color)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '4px',
                    fontWeight: 500,
                    fontSize: '0.9rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Servicios Integrales</h4>
              <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Diseño UX/UI Moderno
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Aplicaciones Web Escalables
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Automatización y APIs
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Hosting y Gestión de Dominios
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
