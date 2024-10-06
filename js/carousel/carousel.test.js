// carousel.test.js
const { initializeCarousel } = require('./carousel');  // Importer la fonction à tester

// Simuler le DOM avec un élément de carrousel
document.body.innerHTML = `
  <div id="customCarousel" class="carousel">
    <div class="carousel-item active"></div>
    <div class="carousel-item"></div>
    <div class="carousel-item"></div>
  </div>
`;

describe('initializeCarousel', () => {
  beforeEach(() => {
    // Réinitialiser le DOM avant chaque test
    document.body.innerHTML = `
      <div id="customCarousel" class="carousel">
        <div class="carousel-item active"></div>
        <div class="carousel-item"></div>
        <div class="carousel-item"></div>
      </div>
    `;

    // Simuler la fonction bootstrap.Carousel et son prototype
    global.bootstrap = {
      Carousel: jest.fn().mockImplementation(() => ({
        to: jest.fn(),
        pause: jest.fn(),
        cycle: jest.fn(),
      }))
    };
  });

  test('should initialize carousel with correct options', () => {
    const carousel = initializeCarousel();

    // Vérifier que bootstrap.Carousel a été appelé avec les bons paramètres
    expect(bootstrap.Carousel).toHaveBeenCalledWith(
      document.querySelector('#customCarousel'),
      { interval: 3000, wrap: true }
    );
  });

  test('should call carousel.to(2)', () => {
    const carousel = initializeCarousel();
    carousel.to(2);

    // Vérifier que la méthode 'to' a bien été appelée avec l'argument 2
    expect(carousel.to).toHaveBeenCalledWith(2);
  });

  test('should pause the carousel', () => {
    const carousel = initializeCarousel();
    carousel.pause();

    // Vérifier que la méthode 'pause' a bien été appelée
    expect(carousel.pause).toHaveBeenCalled();
  });

  test('should start cycling the carousel', () => {
    const carousel = initializeCarousel();
    carousel.cycle();

    // Vérifier que la méthode 'cycle' a bien été appelée
    expect(carousel.cycle).toHaveBeenCalled();
  });
});
