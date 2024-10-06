// places.test.js
const { showCards } = require('./places'); // Assurez-vous que le chemin du fichier est correct

describe('showCards', () => {
  let observerMock;

  beforeEach(() => {
    // Simuler le DOM avec des éléments pour chaque jour
    document.body.innerHTML = `
      <div class="friday"></div>
      <div class="friday"></div>
      <div class="saturday"></div>
      <div class="saturday"></div>
      <div class="sunday"></div>
    `;

    // Mock de l'observateur
    observerMock = {
      observe: jest.fn(),
      unobserve: jest.fn(),
    };
    global.observer = observerMock;
  });

  it('should display only the cards for the selected day (friday)', () => {
    // Appel de la fonction pour afficher les cartes du vendredi
    showCards('friday');

    // Vérifie que les cartes du vendredi sont affichées
    document.querySelectorAll('.friday').forEach(card => {
      expect(card.style.display).toBe('block');
      expect(observerMock.observe).toHaveBeenCalledWith(card);
    });

    // Vérifie que les cartes des autres jours sont cachées
    document.querySelectorAll('.saturday, .sunday').forEach(card => {
      expect(card.style.display).toBe('none');
      expect(observerMock.unobserve).toHaveBeenCalledWith(card);
    });
  });

  // Autres tests similaires...
});
