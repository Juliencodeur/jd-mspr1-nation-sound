// accordion.test.js
const { closeOtherAccordions } = require('./accordion');

// Simuler le DOM avec JSDOM
document.body.innerHTML = `
  <div id="accordion1" class="accordion-collapse"></div>
  <div id="accordion2" class="accordion-collapse"></div>
  <div id="accordion3" class="accordion-collapse"></div>
`;

describe('closeOtherAccordions', () => {
  beforeEach(() => {
    // Réinitialiser le DOM avant chaque test
    document.body.innerHTML = `
      <div id="accordion1" class="accordion-collapse"></div>
      <div id="accordion2" class="accordion-collapse"></div>
      <div id="accordion3" class="accordion-collapse"></div>
    `;

    // Simuler la fonction bootstrap.Collapse et son prototype
    global.bootstrap = {
      Collapse: jest.fn().mockImplementation(() => ({
        hide: jest.fn()
      }))
    };
  });

  test('should close other accordions except the current one', () => {
    closeOtherAccordions('accordion2');

    // Vérifier que bootstrap.Collapse a été appelé pour fermer les autres accordions
    expect(bootstrap.Collapse).toHaveBeenCalledTimes(2);
    expect(bootstrap.Collapse).toHaveBeenCalledWith(
      document.getElementById('accordion1'),
      { toggle: false }
    );
    expect(bootstrap.Collapse).toHaveBeenCalledWith(
      document.getElementById('accordion3'),
      { toggle: false }
    );
  });

  test('should not close the current accordion', () => {
    closeOtherAccordions('accordion2');

    // Vérifier que bootstrap.Collapse n'a pas été appelé pour l'accordion courant
    expect(bootstrap.Collapse).not.toHaveBeenCalledWith(
      document.getElementById('accordion2'),
      { toggle: false }
    );
  });
});

function closeOtherAccordions(currentAccordionId) {
  const accordions = document.querySelectorAll('.accordion-collapse');

  accordions.forEach(function(accordion) {
    if (accordion.id !== currentAccordionId) {
      const bsCollapse = new bootstrap.Collapse(accordion, {
        toggle: false
      });
      bsCollapse.hide();
    }
  });
}

document.querySelectorAll('.accordion-button').forEach(function(button) {
  button.addEventListener('click', function() {
    const targetAccordion = this.getAttribute('data-bs-target').substring(1); 
    closeOtherAccordions(targetAccordion);
  });
});

// Export la fonction pour les tests
module.exports = { closeOtherAccordions };
