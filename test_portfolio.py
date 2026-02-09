"""
Test suite para el backend del portfolio
Pruebas unitarias para la funcionalidad de envío de correos

Para ejecutar las pruebas:
    python -m pytest test_portfolio.py -v
    o
    python -m unittest test_portfolio.py
"""

import unittest
import json
from unittest.mock import patch, MagicMock
from portfolio import app


class TestEmailBackend(unittest.TestCase):
    """Tests para el endpoint de envío de correos"""
    
    def setUp(self):
        """Configuración antes de cada test"""
        self.app = app
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()
        
        # Datos de prueba válidos
        self.valid_data = {
            'name': 'Juan Pérez',
            'email': 'juan@example.com',
            'message': 'Hola, me interesa trabajar contigo.'
        }
    
    def tearDown(self):
        """Limpieza después de cada test"""
        pass
    
    @patch('portfolio.mail.send')
    def test_send_email_success(self, mock_send):
        """Test: Envío exitoso de correo con datos válidos"""
        # Configurar el mock para que no falle
        mock_send.return_value = None
        
        # Enviar request
        response = self.client.post(
            '/send-email',
            data=json.dumps(self.valid_data),
            content_type='application/json'
        )
        
        # Verificaciones
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(data['message'], 'Correo enviado correctamente')
        
        # Verificar que mail.send fue llamado una vez
        mock_send.assert_called_once()
    
    def test_send_email_missing_name(self):
        """Test: Falla cuando falta el campo 'name'"""
        invalid_data = {
            'email': 'juan@example.com',
            'message': 'Mensaje de prueba'
        }
        
        response = self.client.post(
            '/send-email',
            data=json.dumps(invalid_data),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertFalse(data['success'])
        self.assertIn('Faltan datos requeridos', data['message'])
    
    def test_send_email_missing_email(self):
        """Test: Falla cuando falta el campo 'email'"""
        invalid_data = {
            'name': 'Juan Pérez',
            'message': 'Mensaje de prueba'
        }
        
        response = self.client.post(
            '/send-email',
            data=json.dumps(invalid_data),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertFalse(data['success'])
    
    def test_send_email_missing_message(self):
        """Test: Falla cuando falta el campo 'message'"""
        invalid_data = {
            'name': 'Juan Pérez',
            'email': 'juan@example.com'
        }
        
        response = self.client.post(
            '/send-email',
            data=json.dumps(invalid_data),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertFalse(data['success'])
    
    def test_send_email_empty_data(self):
        """Test: Falla cuando se envía un JSON vacío"""
        response = self.client.post(
            '/send-email',
            data=json.dumps({}),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertFalse(data['success'])
    
    def test_send_email_no_json(self):
        """Test: Falla cuando no se envía JSON"""
        response = self.client.post('/send-email')
        
        # Flask devuelve 415 Unsupported Media Type cuando falta Content-Type: application/json
        self.assertEqual(response.status_code, 415)
    
    @patch('portfolio.mail.send')
    def test_send_email_smtp_error(self, mock_send):
        """Test: Manejo de error cuando SMTP falla"""
        # Configurar el mock para que lance excepción
        mock_send.side_effect = Exception('SMTP connection failed')
        
        response = self.client.post(
            '/send-email',
            data=json.dumps(self.valid_data),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 500)
        data = json.loads(response.data)
        self.assertFalse(data['success'])
        self.assertIn('Error', data['message'])
    
    @patch('portfolio.mail.send')
    def test_send_email_message_structure(self, mock_send):
        """Test: Verificar estructura del mensaje enviado"""
        mock_send.return_value = None
        
        response = self.client.post(
            '/send-email',
            data=json.dumps(self.valid_data),
            content_type='application/json'
        )
        
        # Obtener el objeto Message que se pasó a send()
        call_args = mock_send.call_args
        message = call_args[0][0]
        
        # Verificar que el mensaje contiene los datos correctos
        self.assertIn(self.valid_data['name'], message.subject)
        self.assertIn(self.valid_data['name'], message.body)
        self.assertIn(self.valid_data['email'], message.body)
        self.assertIn(self.valid_data['message'], message.body)


class TestRoutes(unittest.TestCase):
    """Tests para las rutas básicas de la aplicación"""
    
    def setUp(self):
        """Configuración antes de cada test"""
        self.app = app
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()
    
    def test_home_route(self):
        """Test: La ruta principal funciona"""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
    
    def test_contact_route(self):
        """Test: La ruta de contacto funciona"""
        response = self.client.get('/contact')
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()
