// Importer le fichier que vous voulez tester
const fs = require('fs');
const path = require('path');

// Charger le fichier JavaScript
const filePath = path.resolve(__dirname, 'texts.js');
const scriptContent = fs.readFileSync(filePath, 'utf8');
document.body.innerHTML = `
  <button id="toggleButton">Lire la suite</button>
  <div id="moreText" class="collapse"></div>
`;

eval(scriptContent); // Exécute le script dans ce contexte

describe('toggleButton text change', () => {
  const toggleButton = document.getElementById('toggleButton');
  const moreText = document.getElementById('moreText');

  test('should change button text to "Voir moins" when shown.bs.collapse is triggered', () => {
    // Simuler l'événement shown
    const event = new Event('shown.bs.collapse');
    moreText.dispatchEvent(event);

    expect(toggleButton.innerHTML).toBe('Voir moins');
  });

  test('should change button text to "Lire la suite" when hidden.bs.collapse is triggered', () => {
    // Simuler l'événement hidden
    const event = new Event('hidden.bs.collapse');
    moreText.dispatchEvent(event);

    expect(toggleButton.innerHTML).toBe('Lire la suite');
  });
});
