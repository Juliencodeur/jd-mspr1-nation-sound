// Importer les fonctions à tester depuis row.js
const { scrollFunction, topFunction } = require('./row');

// Simuler le DOM en créant un élément avec l'ID 'myBtn'
beforeEach(() => {
  document.body.innerHTML = `<button id="myBtn" style="display:none;">Retour en haut</button>`;
});

describe('scrollFunction', () => {
  it('should display the button when scrolled more than 20px', () => {
    // Simuler un défilement de plus de 20 pixels
    document.documentElement.scrollTop = 30;

    // Appeler la fonction de scroll pour tester
    scrollFunction();

    // Vérifier que le bouton devient visible
    const button = document.getElementById('myBtn');
    expect(button.style.display).toBe('block');
  });

  it('should hide the button when scrolled less than 20px', () => {
    // Simuler un défilement de moins de 20 pixels
    document.documentElement.scrollTop = 10;

    // Appeler la fonction de scroll pour tester
    scrollFunction();

    // Vérifier que le bouton est caché
    const button = document.getElementById('myBtn');
    expect(button.style.display).toBe('none');
  });
});

describe('topFunction', () => {
  it('should scroll to the top when the button is clicked', () => {
    // Simuler un défilement vers le bas
    document.documentElement.scrollTop = 100;

    // Appeler la fonction pour remonter en haut
    topFunction();

    // Vérifier que le défilement est revenu en haut
    expect(document.documentElement.scrollTop).toBe(0);
  });
});
