/**
 * Manejo del formulario de contacto
 * Envía los datos al backend Flask via AJAX
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('form-status');

    /**
     * Muestra un mensaje de estado en el formulario
     * @param {string} message - Mensaje a mostrar
     * @param {string} type - Tipo: 'success', 'error', 'loading'
     */
    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = 'form-status ' + type;
        statusDiv.style.display = 'block';
    }

    /**
     * Limpia el formulario
     */
    function clearForm() {
        form.reset();
    }

    /**
     * Maneja el envío del formulario
     */
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Obtener datos del formulario
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validar que todos los campos tengan datos
        if (!formData.name || !formData.email || !formData.message) {
            showStatus('Por favor, completa todos los campos.', 'error');
            return;
        }

        // Deshabilitar botón y mostrar estado de carga
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        showStatus('Enviando tu mensaje...', 'loading');

        try {
            // Enviar datos al backend
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                showStatus('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                clearForm();
            } else {
                showStatus(result.message || 'Error al enviar el mensaje.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showStatus('Error de conexión. Intenta de nuevo más tarde.', 'error');
        } finally {
            // Rehabilitar botón
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar';
        }
    });
});