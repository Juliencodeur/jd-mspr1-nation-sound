const { initializeCountdown } = require('./countdown');

// Simulation d'une structure DOM basique avant chaque test
beforeEach(() => {
  document.body.innerHTML = `
    <div id="months"></div>
    <div id="days"></div>
    <div id="hours"></div>
    <div id="minutes"></div>
    <div id="seconds"></div>
    <div id="countdown"></div>
  `;
});

jest.useFakeTimers();

afterEach(() => {
  // Nettoyer les timers après chaque test
  jest.clearAllTimers();
});

describe('initializeCountdown', () => {
  it('should update the countdown elements after 1 second', () => {
    // Initialiser le compte à rebours
    initializeCountdown();

    // Avancer le temps simulé de 1 seconde
    jest.advanceTimersByTime(1000); 
    jest.runOnlyPendingTimers();

    // Vérifier que les éléments HTML ont bien été mis à jour
    expect(document.getElementById('months').innerHTML).toBe('0');
    expect(document.getElementById('days').innerHTML).toBe('0');
    expect(document.getElementById('hours').innerHTML).toBe('23');
    expect(document.getElementById('minutes').innerHTML).toBe('59');
    expect(document.getElementById('seconds').innerHTML).toBe('59');
  });

  it('should display "Événement terminé" when the countdown is over', () => {
    // Initialiser le compte à rebours
    initializeCountdown();

    // Avancer le temps simulé d'un an
    jest.advanceTimersByTime(1000 * 60 * 60 * 24 * 365); 
    jest.runOnlyPendingTimers();

    // Vérifier que le message final est affiché
    expect(document.getElementById('countdown').innerHTML).toBe("Événement terminé");
  });
});
