export default function Clients() {
  const clients = [
    { name: "God Shoes", logo: "/logo.png", url: "https://godsneakers.com/" },
    { name: "VITCATechnology", logo: "/logo_vitca.png", url: null },
    { name: "Powerrental", logo: "/logo_powerrental.jpeg", url: "https://powerrentalsa.com/" },
    { name: "Neduarca", logo: "/neduarca-logo.png", url: "https://neduarca.com/" }
  ];

  return (
    <section id="clients" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container text-center">
        <h2 style={{ marginBottom: '3rem' }}>Confían en mi trabajo</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
          {clients.map((client, idx) => {
            const imgStyle = {
              maxHeight: '60px',
              maxWidth: '150px',
              objectFit: 'contain',
              filter: 'grayscale(100%) opacity(0.8)',
              transition: 'filter 0.3s ease'
            };

            const content = (
              <img 
                src={client.logo} 
                alt={`Logo de ${client.name}`} 
                style={imgStyle} 
                onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
                onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'}
              />
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
