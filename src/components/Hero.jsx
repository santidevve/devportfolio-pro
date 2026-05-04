export default function Hero() {
  return (
    <section id="home" className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div className="animate-fade-in">
            <p style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>
              Full-Stack Developer + Ingeniero Industrial
            </p>
            <h1 style={{ marginBottom: '1.5rem' }}>Santiago Hernandez.</h1>
            <p className="mb-2" style={{ fontSize: '1.25rem', maxWidth: '480px' }}>
              Ingeniero Industrial con habilidades de programación web y análisis de datos. Construyendo soluciones digitales robustas y eficientes.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">Ver proyectos</a>
              <a href="#contact" className="btn btn-outline">Contáctame</a>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <div>
                <strong style={{ fontSize: '1.5rem', display: 'block' }}>2+</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>años de exp.</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.5rem', display: 'block' }}>4+</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>clientes felices</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--border-color)', transform: 'translate(10px, 10px)', borderRadius: '12px', zIndex: -1 }}></div>
              <img 
                src="/foto-cv.png" 
                alt="Santiago Hernandez" 
                style={{ width: '100%', maxWidth: '350px', borderRadius: '12px', display: 'block', border: '1px solid var(--border-color)' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
