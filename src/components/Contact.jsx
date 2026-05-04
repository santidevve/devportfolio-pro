import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Enviando...');
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('✅ Mensaje enviado correctamente. Te responderé pronto.');
        e.target.reset();
      } else {
        setStatus(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('❌ Hubo un error de conexión al enviar el mensaje.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head text-center mb-2">
          <h2>¡Hablemos de tu proyecto!</h2>
          <p>Cuéntame sobre tus necesidades y te responderé en menos de 48 horas hábiles.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-row">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" placeholder="tu@correo.com" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required></textarea>
          </div>
          
          {status && (
            <div style={{ padding: '1rem', backgroundColor: 'var(--accent-color)', borderRadius: '6px', textAlign: 'center', fontWeight: 500 }}>
              {status}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '1rem' }}>
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
