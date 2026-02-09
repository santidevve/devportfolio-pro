from flask import Flask, render_template
from flask_mail import Mail, Message
import requests


app = Flask(__name__)

# Configura tu servidor SMTP
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # O tu proveedor
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'santiagopontilescs@gmail.com'  # Tu correo
app.config['MAIL_PASSWORD'] = 'tu_contraseña_app'  # Contraseña de aplicación

mail = Mail(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    try:
        msg = Message(
            subject=f"Nuevo mensaje de {data['name']}",
            sender=app.config['MAIL_USERNAME'],
            recipients=['tu_email@gmail.com']  # Donde recibirás los correos
        )
        msg.body = f"""
        Nombre: {data['name']}
        Email: {data['email']}
        
        Mensaje:
        {data['message']}
        """
        mail.send(msg)
        return jsonify({'success': True, 'message': 'Correo enviado correctamente'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    


@app.route("/", methods=['GET','POST'])
def home():
    return render_template('index.html')

@app.route("/contact", methods=['GET','POST'])
def contact():
    return render_template('contactForm.html')



# start app in development environment
if __name__=="__main__":
    app.run(debug=True)