import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "PowerRental S.A.",
    url: "https://powerrentalsa.com/",
    domain: "powerrentalsa.com",
    imgMain: "/screenshot-powerrental.png",
  },
  {
    name: "Neduarca",
    url: "https://neduarca.com/",
    domain: "neduarca.com",
    imgMain: "/screenshot-neduarca.png",
  },
  {
    name: "GodSneakers",
    url: "https://godsneakers.com/",
    domain: "godsneakers.com",
    imgMain: "/screenshot-godsneakers.png",
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head text-center mb-2">
          <h2>Páginas web realizadas</h2>
          <p>Sitios empresariales publicados, desarrollados para marcas reales con presencia digital activa.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--accent-color)',
                aspectRatio: '16/10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={project.imgMain} 
                  alt={`Captura de ${project.name}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy" 
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>{project.name}</h4>
                  <small style={{ color: 'var(--text-muted)' }}>{project.domain}</small>
                </div>
                <ExternalLink size={18} color="var(--text-muted)" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
