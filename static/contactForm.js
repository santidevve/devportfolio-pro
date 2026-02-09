function sendEmail(){
    let params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
}
    emailjs.send("service_cgxvvpl", "template_jz7po79", params).then(
        alert("Correo enviado correctamente")
    )}