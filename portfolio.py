"""
Portfolio Personal - Backend Flask

Este módulo configura el servidor Flask para el portfolio personal,
incluyendo el envío de correos desde el formulario de contacto.

Autor: Santiago Hernandez Pontiles
"""

import os
from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

app = Flask(__name__)

# =============================================
# Configuración de Flask-Mail
# =============================================
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)


# =============================================
# Rutas de la aplicación
# =============================================

@app.route("/", methods=['GET'])
def home():
    """Página principal del portfolio."""
    return render_template('index.html')


@app.route("/contact", methods=['GET'])
def contact():
    """Página del formulario de contacto."""
    return render_template('contactForm.html')


@app.route('/send-email', methods=['POST'])
def send_email():
    """
    Endpoint para enviar correos desde el formulario de contacto.
    
    Espera un JSON con:
    - name: Nombre del remitente
    - email: Correo del remitente
    - message: Mensaje del contacto
    
    Returns:
        JSON con success (bool) y message (str)
    """
    data = request.json
    
    # Validar datos requeridos
    if not data or not all(key in data for key in ['name', 'email', 'message']):
        return jsonify({
            'success': False, 
            'message': 'Faltan datos requeridos (name, email, message)'
        }), 400
    
    try:
        # Crear el mensaje
        msg = Message(
            subject=f"[Portfolio] Nuevo mensaje de {data['name']}",
            recipients=[os.getenv('MAIL_RECIPIENT', os.getenv('MAIL_USERNAME'))]
        )
        
        # Cuerpo del correo
        msg.body = f"""
        
        Nombre: {data['name']}
        Email: {data['email']}
        
        Mensaje:
        {data['message']}
        
        ___________________________________________________
        Enviado desde santiagopontiles.com
        """
        
        # Enviar correo
        mail.send(msg)
        
        return jsonify({
            'success': True, 
            'message': 'Correo enviado correctamente'
        })
        
    except Exception as e:
        print(f"Error al enviar correo: {str(e)}")
        return jsonify({
            'success': False, 
            'message': 'Error al enviar el correo. Intenta de nuevo más tarde.'
        }), 500


# =============================================
# Iniciar aplicación
# =============================================
if __name__ == "__main__":
    app.run(debug=True)