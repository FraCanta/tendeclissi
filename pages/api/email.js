import nodemailer from "nodemailer";

export default async function mailer(req, res) {
  const {
    name,
    surname,
    phone,
    message,
    address,
    selectedCategory,
    selectedSubcategory,
    productOrService,
    formType, // Aggiunto formType
    privacyChecked,
  } = req.body;
  console.log(req.body);

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

  // Scegli il tipo di email da inviare in base a formType
  let emailHtml;

  if (formType === "ecobonus") {
    emailHtml = `
        <h1>Richiesta di informazioni</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cognome:</strong> ${surname}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
        <p><strong>Ha accosentito al trattamento dati</strong> ${privacyChecked}</p>
        `;
  }
  if (formType === "preventivo") {
    emailHtml = `
        <h1>Richiesta di informazioni</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cognome:</strong> ${surname}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
<p><strong>${productOrService}:</strong> ${
      selectedSubcategory
        ? `${selectedCategory} per ${selectedSubcategory}`
        : selectedCategory
    }</p>  
          <p><strong>Ha acconsentito al trattamento dati:</strong> ${privacyChecked}</p>
    `;
  } else if (formType === "sopralluogo") {
    emailHtml = `
        <h1>Richiesta di informazioni</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cognome:</strong> ${surname}</p>
        <p><strong>Indirizzo:</strong> ${address}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
<p><strong>${productOrService}:</strong> ${
      selectedSubcategory
        ? `${selectedCategory} per ${selectedSubcategory}`
        : selectedCategory
    }</p>
        <p><strong>Ha acconsentito al trattamento dati:</strong> ${privacyChecked}</p>
    `;
  } else {
    // Gestisci un tipo di modulo sconosciuto, se necessario
    return res.status(400).json({ error: "Invalid form type" });
  }

  try {
    // Determina il soggetto dell'email principale in base al tipo di form
    const subject =
      formType === "ecobonus"
        ? `Richiesta informazioni: Ecobonus` // Subject for contact form inquiries
        : formType === "preventivo"
        ? `Richiesta per: preventivo`
        : formType === "sopralluogo"
        ? `Richiesta per: sopralluogo`
        : `Richiesta per: ${formType}
          `; // Subject for reservation request
    // Invio della mail principale
    await transporter.sendMail({
      from: `Tendeclissi <info@tendeclissi.it>`,
      to: [
        "fcantale14@gmail.com",
        "info@tendeclissi.it",
        "mirandauxdesigner@gmail.com",
      ],
      subject: subject,
      html: emailHtml,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
