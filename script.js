// Gestion du menu hamburger
const menuHam = document.querySelector('.menuHam');
const navList = document.querySelector('.nav-list');
const anim = document.querySelectorAll('.icone');
const listLinks = document.querySelector('ul');

// activation animation menuHamburger
menuHam.addEventListener('click', () => {
    anim.forEach(el => {
        el.classList.toggle('rot');
    });
    navList.classList.toggle('active');
});

// Fermeture du menu lors du clic sur un lien
listLinks.addEventListener('click', () => {
    navList.classList.remove('active');
    anim.forEach(el => {
        el.classList.remove('rot');
    });
});

const myLogo = document.querySelector('.logo');
const refreshPage = ()=>{
    myLogo.addEventListener('click', ()=>{
        location.reload
    })
}

  // Gestion du formulaire de contact
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Envoi vers un service de formulaire (exemple avec FormSubmit)
    fetch('https://formsubmit.co/ajax/ramanantsalama1@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            alert('Message envoyé avec succès!');
            this.reset();
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
});

// Animation au scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Déclencher une première fois pour les éléments déjà visibles
reveal();