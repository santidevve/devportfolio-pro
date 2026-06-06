export default function About() {
  return (
    <section id="about" style={{ backgroundColor: 'var(--accent-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <div>
            <h2>Sobre mí</h2>
            <p style={{ textAlign: 'justify' }}>
              Soy Santiago Hernandez, Desarrollador Web e Ingeniero Industrial radicado en Venezuela. Mi objetivo es mejorar la presencia digital de su empresa. Mi trayectoria academica y profesional demuestran mi resiliencia, compromiso y honestidad en mi trabajo.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Desde el diseño UX/UI y el desarrollo integral hasta la gestión de dominios y hosting empresarial, me encargo de gestionar la imagen de su organizacion.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Tecnologías Manejadas</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['Flask', 'Python', 'Node.js', 'SQL', 'JavaScript', 'CSS'].map(tech => (
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
                  <span style={{ color: 'var(--text-color)' }}>•</span> Diseño de Sitios Web Estaticos Modernos
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Aplicaciones Web
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Gestión de Dominios y Hosting
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)' }}>•</span> Gestión de SEO
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
