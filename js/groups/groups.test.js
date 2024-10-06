// groups.test.js
const { showCards } = require('./groups'); // Assure-toi que le chemin est correct

beforeEach(() => {
  // Simule le DOM avec des éléments pour chaque jour
  document.body.innerHTML = `
    <div class="friday">Friday Card 1</div>
    <div class="friday">Friday Card 2</div>
    <div class="saturday">Saturday Card 1</div>
    <div class="saturday">Saturday Card 2</div>
    <div class="sunday">Sunday Card 1</div>
    <div class="sunday">Sunday Card 2</div>
  `;
});

describe('showCards', () => {
  it('should display only the cards for the selected day (friday)', () => {
    // Appel de la fonction pour afficher les cartes du vendredi
    showCards('friday');

    // Vérifie que les cartes du vendredi sont affichées
    document.querySelectorAll('.friday').forEach(card => {
      expect(card.style.display).toBe('block');
    });

    // Vérifie que les cartes du samedi et du dimanche sont masquées
    document.querySelectorAll('.saturday, .sunday').forEach(card => {
      expect(card.style.display).toBe('none');
    });
  });

  it('should display only the cards for saturday when selected', () => {
    // Appel de la fonction pour afficher les cartes du samedi
    showCards('saturday');

    // Vérifie que les cartes du samedi sont affichées
    document.querySelectorAll('.saturday').forEach(card => {
      expect(card.style.display).toBe('block');
    });

    // Vérifie que les cartes du vendredi et dimanche sont masquées
    document.querySelectorAll('.friday, .sunday').forEach(card => {
      expect(card.style.display).toBe('none');
    });
  });

  it('should display only the cards for sunday when selected', () => {
    // Appel de la fonction pour afficher les cartes du dimanche
    showCards('sunday');

    // Vérifie que les cartes du dimanche sont affichées
    document.querySelectorAll('.sunday').forEach(card => {
      expect(card.style.display).toBe('block');
    });

    // Vérifie que les cartes du vendredi et samedi sont masquées
    document.querySelectorAll('.friday, .saturday').forEach(card => {
      expect(card.style.display).toBe('none');
    });
  });
});
