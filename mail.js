// Utilisez dotenv pour gérer les variables d'environnement
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function handleSubmit(event) {
    // Empêcher le comportement par défaut du formulaire
    event.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(event.target);
    
    // Traiter les données
    const donnees = Object.fromEntries(formData);
    console.log('Données reçues:', donnees);
    
    // Exemple d'envoi des données à un serveur
    fetch('/votre-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donnees)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Succès:', data);
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
  }