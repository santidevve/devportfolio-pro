import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container nav-row">
        <a href="#home" className="brand" style={{ fontWeight: 700, fontSize: '1.2rem' }}>
          Santiago Hernandez
        </a>
        
        {/* Desktop Nav */}
        <nav className="nav-links" style={{ display: 'none' }}>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#clients">Clientes</a>
        </nav>
        
        <a href="#contact" className="btn btn-outline" style={{ display: 'none' }}>
          Hablemos
        </a>

        {/* Mobile menu toggle (simple inline styles for demo) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
          className="mobile-toggle"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Basic responsive behavior injected via style tag for simplicity, ideally in index.css */}
      <style>{`
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
          .btn-outline { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .mobile-nav {
          display: ${isOpen ? 'flex' : 'none'};
          flex-direction: column;
          padding: 1rem 2rem;
          gap: 1rem;
          background: var(--bg-color);
          border-bottom: 1px solid var(--border-color);
        }
      `}</style>
      
      <div className="mobile-nav">
        <a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#clients" onClick={() => setIsOpen(false)}>Clientes</a>
        <a href="#contact" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>Hablemos</a>
      </div>
    </header>
  );
}
