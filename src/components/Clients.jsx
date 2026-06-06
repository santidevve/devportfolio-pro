export default function Clients() {
  const clients = [
    { name: "Inverleb", logo: "/logo_inverleb.png", url: null },
    { name: "Rosa Mística Construcciones", logo: "/logo_rosamistica.jpg", url: "https://rosamisticaconstrucciones.com/" },
    { name: "VITCATechnology", logo: "/logo_vitca.png", url: null },
    { name: "Powerrental", logo: "/logo_powerrental.jpeg", url: "https://powerrentalsa.com/" },
    { name: "Neduarca", logo: "/neduarca-logo.png", url: "https://neduarca.com/" },
    { name: "GOD", logo: "/logo_god.png", url: "https://godsneakers.com/" }
  ];

  return (
    <section id="clients" style={{ 
      borderTop: '1px solid #1a1a1a', 
      borderBottom: '1px solid #1a1a1a',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      padding: '5rem 0'
    }}>
      <div className="container text-center">
        <h2 style={{ marginBottom: '3rem', color: '#ffffff' }}>Confían en mi trabajo</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
          {clients.map((client, idx) => {
            // Define dynamic filters to blend logos seamlessly with the black background
            let defaultFilter = '';
            let hoverFilter = '';
            let mixBlendMode = 'normal';

            if (client.name === "Inverleb") {
              // Transparent PNG with black text. Invert makes it white.
              defaultFilter = 'invert(1) grayscale(100%) brightness(1.5) opacity(0.6)';
              hoverFilter = 'invert(1) grayscale(0%) brightness(1.5) opacity(1)';
            } else if (client.name === "Rosa Mística Construcciones") {
              // Dark blue background JPEG. Grayscale + high contrast makes bg black, then screen mode keys it out.
              defaultFilter = 'grayscale(100%) contrast(300%) brightness(80%) opacity(0.6)';
              hoverFilter = 'grayscale(0%) contrast(150%) brightness(100%) opacity(1)';
              mixBlendMode = 'screen';
            } else if (client.name === "GOD") {
              // Black background with yellow text. Already dark background, just needs screen and grayscale.
              defaultFilter = 'grayscale(100%) opacity(0.6)';
              hoverFilter = 'grayscale(0%) opacity(1)';
              mixBlendMode = 'screen';
            } else {
              // Logos with white backgrounds. Invert makes background black, screen mode keys it out.
              defaultFilter = 'invert(1) grayscale(100%) contrast(150%) brightness(1.2) opacity(0.6)';
              hoverFilter = 'invert(1) grayscale(0%) contrast(150%) brightness(1.2) opacity(1)';
              mixBlendMode = 'screen';
            }

            const imgStyle = {
              maxHeight: '140px',
              maxWidth: '300px',
              objectFit: 'contain',
              filter: defaultFilter,
              mixBlendMode: mixBlendMode,
              transition: 'all 0.3s ease'
            };

            const content = (
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '150px', width: '320px' }}>
                <img 
                  src={client.logo} 
                  alt={`Logo de ${client.name}`} 
                  style={imgStyle} 
                  onMouseOver={e => { e.currentTarget.style.filter = hoverFilter; }}
                  onMouseOut={e => { e.currentTarget.style.filter = defaultFilter; }}
                />
              </div>
            );

            return client.url ? (
              <a key={idx} href={client.url} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={idx}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
