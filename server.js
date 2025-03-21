const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration du transporteur d'emails
const transporter = nodemailer.createTransport({
  service: 'gmail', // Vous pouvez utiliser d'autres services comme 'outlook', 'yahoo', etc.
  auth: {
    user: 'ramanantsalama1@gmail.com', // Votre adresse email
    pass: 'votre-mot-de-passe-application' // Mot de passe d'application Gmail
  }
});

// Route pour gérer l'envoi d'email
app.post('/envoyer-email', async (req, res) => {
  try {
    const { email, message } = req.body;

    // Configuration de l'email
    const mailOptions = {
      from: 'votre-email@gmail.com',
      to: 'email-de-reception@example.com', // L'adresse email où vous voulez recevoir les messages
      subject: 'Nouveau message du formulaire de contact',
      text: `Message de: ${email}\n\n${message}`
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});