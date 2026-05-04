import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', backgroundColor: 'var(--accent-color)' }}>
      <div className="container text-center">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://github.com/santidevve" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/santiago-hernández-385469323" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/santiagopontiles/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={24} />
          </a>
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Santiago Hernandez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
