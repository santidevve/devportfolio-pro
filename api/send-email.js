import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Faltan datos requeridos (name, email, message)' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.MAIL_USERNAME}>`,
      replyTo: email,
      to: process.env.MAIL_RECIPIENT || process.env.MAIL_USERNAME,
      subject: `[Portfolio] Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n\n___________________________________________________\nEnviado desde santiagopontiles.com`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return res.status(500).json({ success: false, message: 'Error al enviar el correo. Intenta de nuevo más tarde.' });
  }
}
