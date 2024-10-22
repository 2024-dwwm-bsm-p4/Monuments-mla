
function afficherTexte(titre, contenu) {
    // Met à jour le titre de la section
    document.getElementById('title').innerText = titre;
    
    // Met à jour le texte de la section
    document.getElementById('text-content').innerText = contenu;
}



const images = document.querySelectorAll('.image-row img');
console.log(images);

        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                images.forEach(img => {
                    if (img !== image) {
                        img.style.filter = 'grayscale(100%)' ;
                    }
                    });

                    afficherTexte(image.getAttribute('titre'), image.getAttribute('contenu'));
                });
                image.addEventListener('mouseout',() => {
                    images.forEach(img => {
                        img.style.filter = 'none';
                    });

                    });
            });

        