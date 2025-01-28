import nodemailer from "nodemailer";

export default async function mailer(req, res) {
  const {
    name,
    surname,
    phone,
    message,
    formType, // Aggiunto formType
    privacyChecked,
  } = req.body;

  // Crea il trasportatore per inviare le email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true", // Confronto booleano
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Determina il soggetto dell'email principale in base al tipo di form
    // const subject =
    //   formType === "ecobonus"
    //     ? `Richiesta informazioni: Ecobonus` // Subject for contact form inquiries
    //     : null;

    // Invio della mail principale
    await transporter.sendMail({
      from: `Tendeclissi <info@ltendeclissi.it>`,
      to: ["fcantale14@gmail.com"],
      //   subject: subject,
      subject: "Richiesta di informazioni",
      html: `
        <h1>Richiesta di informazioni</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cognome:</strong> ${surname}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
        <p><strong>Ha accosentito al trattamento dati</strong> ${privacyChecked}</p>
        `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
